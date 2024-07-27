let model=require('../models/data.js')
let {setid,getid}=require("../services/auth.js")
const {v4:uuidv4}=require('uuid')

function handlesignup(req,res){
    console.log("post working")
    console.log(req.body)

    try{
    const user=new model({name:req.body.name,email:req.body.email,password:req.body.password})
    user.save()

    }
    catch(e){
        console.log(e)
    }

    return res.redirect("/login")
    
}



async function handlelogin(req,res)
{
    console.log(uuidv4())
    let {email,password}=req.body
    let user=await model.findOne({email,password})
    if(user)
        {
            // console.log(user)
            let sessionid=uuidv4()
            setid(sessionid,user)
            res.cookie('uid',sessionid)
            console.log(getid(sessionid))
    return res.redirect('/')
        }
    else
    return res.redirect('/signup')




}
module.exports={handlelogin,handlesignup}