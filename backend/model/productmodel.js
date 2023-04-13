const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    photo:{
        type:jpeg,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required
    },

})

module.exports = mongoose.model('product',productSchema)