const express = require('express')
const cors = require('cors')
const productsRouter = require('./routes/products')
const ordersRouter = require('./routes/orders')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/products', productsRouter)
app.use('/api/orders', ordersRouter)

module.exports = app
