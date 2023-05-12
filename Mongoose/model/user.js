const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fname:{
        type: String
    },
    phone:{
        type: String
    },
    email:{
        type: String
    },
    message:{
        type: String
    },
    
    
})
const User = mongoose.model('User',userSchema)
module.exports= User