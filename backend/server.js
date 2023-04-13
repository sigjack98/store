const express = require('express')
const userRouter = require('./routes/userRoute')
const cors = require ('cors')
const connectdb = require('./config/connectddb')
const productRoute = require('./routes/productRoute');
const orderRoutes = require ('./routes/orederRoute')


const app = express()

const port = 3008

app.use(cors())
require('dotenv').config()







app.use(express.json())
app.use(cors())
connectdb()
app.use('/auth/users' ,userRouter)
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes)
app.listen(port,err =>{
    err?console.log(err) : console.log(`yes go to the port ${port}`)
})
