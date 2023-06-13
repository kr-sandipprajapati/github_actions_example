const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/data").then(
    ()=>console.log("Database is Connected")
).catch((err=>console.log("Get error during database connection")));
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model("userInfo",userSchema);

const getUser = async()=>{
    try{
        const user = await User.find()
        return user
    }
    catch(err){
        return err
    }
}
const postUser = async(data)=>{
    try{
        const user = new User(data);
        return user.save()
    }
    catch(err){
        return err
    }
}

module.exports = {
    getUser,postUser
}