const ModbusRTU = require("modbus-serial");
const Inverter = require('../inverter/inverter.js')

function conection(devices){
    let inverters = []; // Invesores

    devices.forEach(item=>{
        // Configuracion de Inversor y Cliente Modbus
        inverters.push({
            id: Math.floor(Math.random()*10e8),
            name: 'Inversor X',
            inverter: new Inverter(item),
            clientsModbus: new ModbusRTU()
        })
    })

    inverters.forEach((item,index)=>{

        item.clientsModbus.connectRTUBuffered(item.inverter.portDevice, item.inverter.parameters,(err)=>{
            if(err){
                console.log('Error al conectar', err);
                process.exit(1)
            }else{
                console.log('Conexión Exitosa en el puerto', item.inverter.portDevice)
            }
        })

        item.inverter.getData(item.clientsModbus)

        // setInterval( ()=>{
            
        //     }, item.inverter.config.sampleTime);
        })
}

module.exports = conection;
