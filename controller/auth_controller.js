const bcrypt = require("bcrypt")
const db = require("../model/DBmodel")
const {createToken} = require("./auth")
const {v4: uuid} = require("uuid")
// const uuid = require("uuid")


require("dotenv").config()



signup_post =  (req, res)=>{
    
        var username = req.body.username
        var email = req.body.email
        var hashPwd = req.body.password
        console.log(username, email, hashPwd)
    try{    
        
        var salt = bcrypt.genSaltSync(10)
        var password = bcrypt.hashSync(hashPwd, salt, ()=> console.log(hashPwd)) 
         
        console.log(password)
         db.create({id:uuid(),username, email, password})
            .then(user =>{
                var token = createToken(user.id)
                console.log(token)
                res.cookie("jwt", token, {httpOnly: true, secure: true, maxAge: 60*60*2})
                res.status(200).json({id: user.id})
            }).catch(err =>{
                res.status(400).json({})
            })
        
               
    } catch (err) {
        console.log(err)
    }
    
    
    
}

login_post = (req, res)=>{
     
    var password = req.body.password
    // console.log( password)

      db.findOne({where: {email: req.body.email}})
        .then(user => {
            const validPwd = bcrypt.compareSync(password, user.password);
            if(validPwd){
                var token = createToken(user.id, user)
                console.log(token)
                res.cookie("jwt", token, {httpOnly: true, secure: true, maxAge: 60*60*2})
                res.status(201).json({user: user.id})
                console.log(user.id)
            }else{
                res.status(402).json({message: "password is not valid"})
            }
            
        }).catch(err => console.log(err))
            
}

logout=(req, res)=>{
    res.send("logged out")
}
module.exports = {signup_post, login_post, logout}