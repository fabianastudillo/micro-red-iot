const ModbusRTU = require("modbus-serial");
const Inverter = require('../inverter/inverter.js')

/**
 * @function conection - Conexión con los dispositivos
 * @param {Array} devices - Dispositivos conectados
 * @description Conexión con los dispositivos
 */

function conection(devices){
    
    /**
     * @var {[Object<Array>]} inverters - Array de Inversores
     */
    let inverters = []; // Invesores

    devices.forEach(item=>{
        inverters.push({
            id: Math.floor(Math.random()*10e8),
            name: 'Inversor X',
            inverter: new Inverter(item),
            clientsModbus: new ModbusRTU()
        })
    })

    inverters.forEach((item,index)=>{

        item.inverter.getData(item.clientsModbus);

        })
}

module.exports = conection;
