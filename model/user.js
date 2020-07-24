const mongoose=require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    email: {
        type:String,
        trim:true,
        unique:1
    },
    password: {
        type:String,
        minlength:7
    },
    role: {
        type:Number,
        default:0
    }
});

const User = mongoose.model('User',userSchema);
module.exports={User};