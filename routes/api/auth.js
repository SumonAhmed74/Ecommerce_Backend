const express = require("express")
const _ = express.Router()
const User = require('../../model/userSchema.js')

_.get('/registration',(req,res)=>{
     const {email,phone,firstName,lastName,password}=req.body
   console.log(req.body)
     if(!firstName){
        return res.send("Err: Please enter your firstName!")
     }
     if(!lastName){
        return res.send("Err: Please enter your lastName!")
     }
     if(!email){
        return res.send("Err: Please enter your email!")
     }
     if(!phone){
        return res.send("Err: Please enter your phoneNumber!")
     }
     if(!password){
        return res.send("Err: Please enter your password!")
     }

     const user = new User({
      email,
      phone,
      firstName,
      lastName,
      password,
     })
     user.save();

     res.send(user)
})

module.exports= _;