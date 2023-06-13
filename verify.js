const {getUser} = require('./services/api')
 
const verifyUser = async(username,password)=>{
    let data =await getUser().then(res=>{
        res.data.filter((data)=>{
            if(username===data.username){
                if(password===data.password){
                    return data
                }
            }
        })
    })
}

module.exports = {verifyUser}
