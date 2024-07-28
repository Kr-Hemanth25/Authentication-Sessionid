let express=require('express')
let {res}=require('../middlewares/res.js')
const {getid}=require('../services/auth.js')

let router=express.Router()

router.get('/signup',(req,res)=>{
    res.render("signup")

})

router.get('/login',(req,res)=>{
    const userid=req.cookies.uid
    if(userid){
        const user=getid(userid)
        if(user)
            {
                req.user=user;
    res.render("home",{name:req.user.name})


        }


    }
    res.render("login")

})

router.get('/',res,(req,res)=>{
    res.render("home",{name:req.user.name})

})

let {handlelogin,handlesignup}=require('../maintainer/users.js')

router.post('/signup',handlesignup)

router.post('/login',handlelogin)

module.exports=router