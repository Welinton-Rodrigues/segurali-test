const express = require('express')
const router = express.Router()
const orders = require('../data/orders')

router.get('/', (req, res) => {
  res.json(orders)
})

router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id)
  if (!order) return res.status(404).json({ message: 'Order not found' })
  res.json(order)
})

module.exports = router
