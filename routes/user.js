let express=require('express')
let router=express.Router()
let {handlelogin,handlesignup}=require('../maintainer/users.js')
const cookieParser = require('cookie-parser')

router.post('/signup',handlesignup)

router.post('/login',handlesignup)

router.post('/logout',(req,res)=>{
    // req.user={}
    // res.clearCookie('uid')
    // return res.redirect('/login')
    return res.json({hi:"hello"})

})

module.exports=router