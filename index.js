const express = require('express');
const app = express();
const fileJson = require("./chai.json").userdata
const {getUser,postUser} = require("./model/model")
app.use(express.json())
app.get("/userdata",async(req,res)=>{
    try{
    const data = await getUser()
    res.status(200).send(data)
    }
    catch(err){
        res.status(404).send("404 Error Occur")
        console.log(err)
    }

})
app.post("/userdata",async(req,res)=>{
    try{
    const data = req.body;
    const user = await postUser(data)
    res.status(200).send(user)
    }
    catch(err){
        res.send("400 Error Occur")
        console.log(err)
    }

})
module.exports =app.listen(6000,()=>{console.log("Port is Runnig")})
