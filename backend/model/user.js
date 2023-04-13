const mongoose = require('mongoose')

const userSchema = new Mongoose.Schema({
    nama:String,
    email:{
        type:String,
        required:true,
        unique:true
    },

    password: {
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        defualt:'Customer'
    },
    panier:{
        type:[],
        }




})

module.exports = mongoose.model('customers',userSchema)