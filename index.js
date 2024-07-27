let express=require('express')
let app=express()
// let router=require("./routes/user.js")
let router=require('./routes/staticroute.js');
const cookieParser = require('cookie-parser');
// const connect=mongoose.connect('mongodb://127.0.0.1:27017/test')


app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cookieParser())
app.set('view engine', 'ejs');
app.use('/',router)

app.listen(2000,()=>{
    console.log('express started')
})
