const handlerMicrocontoller = require('./microcontroller/handler.js')
const conection = require('./conection/conection.js')
const bashScript = require('./bash.js')

/**
 * @module index.js
 * @description Ejecutar el script bash para detectar los puertos USB
 * @function handlerMicrocontoller - Ejecutar el script bash para detectar los puertos USB
 * @param {string} bashScript - Script bash para detectar los puertos USB 
 * @returns {Promise} - Promesa con la ejecución del script
 * 
 * @param conection - Conexión con los dispositivos
 */

handlerMicrocontoller(bashScript)
    .then(()=>{
        let devices = require('./devices.js')
        conection(devices)
    })
    .catch((e)=>{
        console.log(e)
    })
