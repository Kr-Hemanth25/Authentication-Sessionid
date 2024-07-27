let express=require('express')
let {res}=require('../middlewares/res.js')

let router=express.Router()

router.get('/signup',(req,res)=>{
    res.render("signup")

})

router.get('/login',(req,res)=>{
    res.render("login")

})

router.get('/',res,(req,res)=>{
    res.render("home")

})

let {handlelogin,handlesignup}=require('../controllers/users.js')

router.post('/signup',handlesignup)

router.post('/login',handlelogin)

module.exports=router