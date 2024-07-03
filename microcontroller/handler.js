const { exec } = require('child_process');

/**
 * @function handler - Ejecutar el script bash para detectar los puertos USB
 * @param {*} bashScript  - Script bash para detectar los puertos USB
 * @returns  {Promise} - Promesa con la ejecución del script
 */

function handler(bashScript){
    console.log('Detectando Puertos USB ...')
    return new Promise(function(resolve, reject){
        exec(bashScript, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error ejecutando el script: ${error}`);
                reject(error)
            }
            resolve(stdout.trim())
        })
    }) 
}

module.exports = handler;