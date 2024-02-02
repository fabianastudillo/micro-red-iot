const { exec } = require('child_process');

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