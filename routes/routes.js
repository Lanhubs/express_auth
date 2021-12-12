var express = require("express")
const router = express.Router() 
const {signup_post, login_post, logout} = require("../controller/auth_controller")

// verify token
const {verifyToken} = require("../controller/auth")


const jwt = require("jsonwebtoken")
const db = require("../model/DBmodel")
router.get("/", (req, res)=>{
    
   
    db.findAll()
        .then(result =>{
            console.log(result)
            res.render("home")
        }).catch(err=>{
            console.log(err)
        })
})
// sign route
router.get("/signup", (req, res)=>{
     res.render("signup")
     
    
    
})
router.post("/signup", signup_post)


// login routes
router.get("/login", (req, res)=>{
    res.render("login")

})
// goodies home page route
router.get("/goodies"/* , verifyToken */, (req, res)=>{
    res.render("goodies")
})

router.post("/login", login_post)
router.get("/logout", logout)




module.exports = router