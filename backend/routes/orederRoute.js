const express = require('express');
const router = express.Router();
const {createOrder,getOrders,getOrderById,updateOrderToPaid,updateOrderToDelivered} = require ('../controllers/order')


router.post('/',createOrder);

router.get('/', getOrders);

router.get('/:id',getOrderById);

router.put('/:id/pay',updateOrderToPaid);

router.put('/:id/deliver', updateOrderToDelivered);

module.exports = router;