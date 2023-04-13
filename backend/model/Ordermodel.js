const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderItems:[{
        name:{type:String,
             required:true},
        quant:{type:String,
            required:true},
        image:{type:png,
             required:true},
        price:{type:Number,
            required:true},
            product :{
                type: mongoose.Schema.Types.ObjectId,
                required:true,
            },
    },],
    shipping:{
        type:String,
        required:true
    },

    totalPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    isPaid : {
        type : Boolean,
        required : true , 
        default : false 
    },

    isDelivered : {
        type : Boolean,
        required : true , 
        default : false 
    }


})

module.exports = mongoose.model('orders',orderSchema)