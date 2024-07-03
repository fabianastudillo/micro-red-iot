const sendData = require('../web/config');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

/**
 * @class ConfigConnection - Configuración de la conexión
 * @param {number} baudRate - Velocidad de transmisión
 * @param {string} parity - Paridad
 * @param {number} dataBits - Bits de datos
 * @param {number} stopBits - Bits de parada
 * @description Configuración de la conexión
 * @method getConfig - Obtener la configuración de la conexión
 * @returns {Object} - Configuración de la conexión
 */
class ConfigConnection {
    baudRate
    parity
    dataBits
    stopBits
    
    constructor(baudRate, parity, dataBits, stopBits){
        this.baudRate = baudRate
        this.parity = parity
        this.dataBits = dataBits
        this.stopBits = stopBits
    }

    getConfig(){
        return {
            baudRate: this.baudRate,
            parity: this.parity,
            dataBits: this.dataBits,
            stopBits: this.stopBits
        }
    }
}

/**
 * @class ConfigInverter - Configuración del inversor
 * @param {number} serverId - ID del servidor
 * @param {number} address - Dirección del servidor
 * @param {number} registers - Registros del servidor
 * @param {number} sampleTime - Tiempo de muestreo
 * @description Configuración del inversor
 * @method getInfo - Obtener la información del inversor
 * @returns {Object} - Información del inversor
 * @method setInfo - Establecer la información del inversor
 * @param {number} serverId - ID del servidor
 * @param {number} sampleTime - Tiempo de muestreo
 * @returns {void}
 */
class ConfigInverter {
    serverId
    address
    registers
    sampleTime

    constructor(serverId, address, registers, sampleTime){
        this.serverId = serverId
        this.address = address
        this.registers = registers
        this.sampleTime = sampleTime
    }

    getInfo(){
        return {
            serverId: this.serverId,
            address: this.address,
            registers: this.registers,
            sampleTimer: this.sampleTime
        }
    }

    setInfo(serverId, sampleTime){
        this.serverId = serverId
        this.sampleTime = sampleTime
    }
}

/**
 * @class Inverter - Inversor
 * @param {string} portDevice - Puerto del dispositivo
 * @description Inversor
 * @method getData - Obtener los datos
 * @param {Object} client - Cliente
 * @returns {void}
 * @method setParameters - Establecer los parámetros
 * @param {Object} parameters - Parámetros
 * @returns {void}
 * @method setConfig - Establecer la configuración
 * @param {Object} config - Configuración
 * @returns {void}
 * @method getInfo - Obtener la información
 * @returns {Object} - Información
 * @method ConfigConnection - Configuración de la conexión
 * @param {number} baudRate - Velocidad de transmisión
 * @param {string} parity - Paridad
 * @param {number} dataBits - Bits de datos
 * @param {number} stopBits - Bits de parada
 * @returns {void}
 * @method ConfigInverter - Configuración del inversor
 * @param {number} serverId - ID del servidor
 * @param {number} address - Dirección del servidor
 * @param {number} registers - Registros del servidor
 * @param {number} sampleTime - Tiempo de muestreo
 * @returns {void}
 * @method sendData - Enviar datos
 * @param {Object} packModbus - Paquete Modbus
 * @param {string} token - Token
 * @returns {void}
 * @method uuidv4 - UUID
 * @returns {string} - UUID
 */

class Inverter {
    id
    portDevice
    parameters
    config
    token

    constructor(portDevice){
        this.id = uuidv4();
        this.portDevice = portDevice;
        this.parameters = new ConfigConnection(9600,"none",8,1);
        this.config = new ConfigInverter(1,3000,83,1000);
        if(portDevice=='/dev/ttyUSB0'){
            this.token = process.env.INVERTER_ONE_ACCESS_TOKEN;
        }else{
            this.token = process.env.INVERTER_TWO_ACCESS_TOKEN;
        }
    }

    getData(client){
        let clientsModbus = client;
        let packModbus = {
            idInverter: this.id,
            timeStampLocal: JSON.stringify(new Date()),
        }


        setInterval(()=>{
            packModbus.data = [2,70,0,1,0,660,0,608,0,3670,0,39,0,156,24,52,0,1672,0,1764,0,1414,43,1,1,0,1,0,1,0,2406,3406,0,0,0,2245,0,0,30,0,0,368,5999,3,0,0,0,0,4,11000,1000,1000,0,9,4,0,0,0,660,1000,12305,4641,546,2177,0,2,0,0,0,0,0,1,23,12,8,12,0,59,0,0,0,0,0];

            sendData(packModbus, this.token);
            // clientsModbus.setID(this.config.serverId);
            // clientsModbus.readInputRegisters(this.config.address, this.config.registers)
            //     .then((data)=>{

            //         for(let i=0; i< this.registers; i++){
            //             packModbus[`var${i}`] = new data.data[i];
            //         }

            //         sendData(packModbus, this.token);
            //     })
            //     .catch((e)=>{
            //         console.log(e)
            //         clientsModbus.close();
            //     });

        },this.config.sampleTime)
    }

    setParameters({baudRate, parity, dataBits, stopBits}){
        this.parameters.baudRate = baudRate
        this.parameters.parity = parity
        this.parameters.dataBits = dataBits
        this.parameters.stopBits = stopBits
    }
    setConfig({ serverId, address, registers, sampleTime }){
        this.config.serverId   = serverId;
        this.config.address    = address;
        this.config.registers  = registers;
        this.config.sampleTime = sampleTime;
    }

    getInfo(){
        return {
            port: this.port, 
            parameters: this.parameters,
            config: this.config
        }
    }
}

module.exports = Inverter;