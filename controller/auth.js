var jwt = require("jsonwebtoken")
const db = require("../model/DB.config")
require("dotenv").config()


createToken =(id)=>{
    return jwt.sign({id}, process.env.TOKEN_SECRET, {expiresIn: "2h"})
}
// FORMAT OR TOKEN
// Authorization Bearer access_token
// verify token

verifyToken = (req, res, next)=>{
    const token = req.cookies.jwt

    // check for jsonwebtoken existence
    if(token){
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken)=>{
            if(err){
                console.log(err)
                res.redirect("/login")
            }else{
                console.log(decodedToken)
                next()
            }
        })
    }else{
        res.redirect("/login")
    }
}
module.exports = {verifyToken, createToken}