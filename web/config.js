const axios = require('axios').default;

async function sendData(data, token){
    let urlServer = 'https://micro-red.ucuenca.edu.ec/api/v1/';
    let token = token;
    let urlSend = urlServer + token + '/telemetry';
    axios.post(urlSend,data,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

module.exports = sendData;