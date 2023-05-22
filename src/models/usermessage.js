const mongoose = require("mongoose")
const validator = require("validator")

const userSchema =  mongoose.Schema({
    Name : {
        type:String,
        //required:true
    },  
    email: {
        type:String,
        required:true,
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("Invalid email id")
        //     }
        // }
        //unique:false
        //unique:[true, "Email already present"]

    },
    phone: {
        type:Number,
        //required:true,
        min:10
    },
    
    message : {
        type:String,
        //required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
    

})


const User = mongoose.model("User", userSchema)

module.exports = User;