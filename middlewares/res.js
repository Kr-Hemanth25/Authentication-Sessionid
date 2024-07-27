const {getid}=require('../services/auth')
function res(req,res,next) {


    const userid=req.cookies.uid

    if(!userid) return res.redirect('/login')

    const user=getid(userid)
    
    if(!user) return res.redirect('/login')

    req.user=user
    
    next()
}

module.exports={res}