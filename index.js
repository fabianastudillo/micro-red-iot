const handlerMicrocontoller = require('./microcontroller/handler.js')
const conection = require('./conection/conection.js')
const bashScript = require('./bash.js')

handlerMicrocontoller(bashScript)
    .then(()=>{
        let devices = require('./devices.js')
        conection(devices)
    })
    .catch((e)=>{
        console.log(e)
    })

