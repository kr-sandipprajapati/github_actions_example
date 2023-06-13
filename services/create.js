const axios = require('axios');

const user =axios.create({
    baseUrl:"http://localhost:3000",
    headers:{
        "Content-type":"application/json"
    }
    
})
module.exports = user