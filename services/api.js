const user = require('./create');

const createUser = (data)=>{
    return user.post("http://localhost:6000/userdata",data);

}
const getUser = ()=>{
    return user.get("http://localhost:6000/userdata")
}
module.exports = {createUser,getUser}