const {createUser} = require('./services/api')

async function addUser(data){
    return await createUser(data)
}
module.exports = {addUser}
