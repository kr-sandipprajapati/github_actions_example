const chai= require('chai');
const chaiHttp = require('chai-http');
// const {addUser} = require("../register");
// const {verifyUser} = require("../verify");
const create = require('../index')
const request = require('supertest')
const data = {username:"sansun",email:"sbprajapati979@gmail.com",password:"san@1234",name:"Sandip Prajapati"}
const expect = chai.expect;
// const request = chai.request;
describe("Register User",function(){
    it("Username Check",function(){
        expect(data.username.length).to.at.least(3)
        expect(data.username).to.be.a('string')
    })
    it("Email Check",function(){
        expect(data.email.split(".")[1]).to.be.equal("com");
        expect(data.email).to.be.a('string')
    })
    it("Password Check",function(){
        expect(data.password.length).to.at.least(6);
        expect(data.password).to.be.a('string');
    })
    it("Name Check",function(){
        expect(data.name).to.be.a('string');
        expect(data.name.length).to.be.not.at.most(3)
    })
    // it("Register User",async function(){
    //     const result = await !!addUser(data)
    //     expect(result).to.be.true;
    // })
    // it("Verify User",async function(){
    //     const result = await !!verifyUser(data.username,data.password).then(res=>res);
    //     expect(result).to.be.true
    // })
})
describe("GET /userdata",function(){
    it("Getting Data",function(){
        request(create)
        .get('/userdata')
        .expect('Content-Type',/json/)
        .expect(200)
        .end(
            function(err,res){
                if (err) return err;
        
            }
        )
    })

})
describe("POST /userdata",function(){
    it("Posting Data",async function(){
        request(create)
        .post('/userdata')
        .send(data)
        .set("Accept","application/json")
        .expect(200||304)
        .end(
            (err,res)=>{
                if(err) return err;
            }
        )
    })

})

// chai.use(chaiHttp);


// describe('Getting Data',function(){
//     it("/userdata",function(){
//         request(create).get(
//             '/userdata'
//         )
//         .end(function(err,res){
//             if(err) throw err;
//             expect(res).to.have.status(200);
//             expect(res).to.have.header('Content-Type',/json/)
//         })
//     })
// })