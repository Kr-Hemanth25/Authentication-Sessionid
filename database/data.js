const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')


const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // minlength: 3,
        // maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true,
        // minlength: 6
    }
})

const model=mongoose.model("data",Schema)

module.exports=model

