let express=require('express')
let app=express()
const path=require('path')
// let router=require("./routes/user.js")
let router=require('./routes/staticroute.js');
const cookieParser = require('cookie-parser');
// const connect=mongoose.connect('mongodb://127.0.0.1:27017/test')


app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cookieParser())
app.set('view engine', 'ejs');
app.use('/',router)
app.post('/logout',(req,res)=>{
    req.user={}
    res.clearCookie('uid')
    return res.redirect('/login')
    // return res.json({hi:"hello"})

})


app.listen(2000,()=>{
    console.log('express started')
})

