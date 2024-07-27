let express=require('express')
let router=express.Router()
let {handlelogin,handlesignup}=require('../controllers/users.js')

router.post('/signup',handlesignup)

router.post('/login',handlesignup)

module.exports=router