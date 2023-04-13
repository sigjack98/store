const express = require('express')
const router = express.Router();
const userRouter = express.Router();

const {register,signin,getAllUsers, addToCard} = require('../controllers/users')
const{validation,registerValidator,loginValidator} = require('../middlewares/RegisterValidator')
const {isAuth} = require ('../middlewares/isAuth')

userRouter.post('./signup',registerValidator,validation,register)
userRouter.post('./sigin',loginValidator,signin)

userRouter.get('getUser',isAuth,(req,res)=>{
res.send(req.user)})

userRouter.get('/getAll',getAllUsers)
userRouter.put('/addtocart/:id',addToCard)