const express = require('express')
const app = express()
const port = 9000
const path = require('path')
const cors = require('cors')

const whitelist = ['http://127.0.0.1:3000', 'http://localhost:3000']
const options = {
  origin: whitelist,
}

app.use(cors(options))

app.get('/', (req, res) => {
  console.log('reg comes')
  res.status(200).send({ success: true, message: 'this is home page message' })
})

app.post('/order', (req, res) => {
  res.status(200).send({ success: true, message: 'your order on route' })
})

app.get('/api/orders', (req, res) => {
  res.status(200).send({ success: true, message: 'WILL BE SENT ORDER CONTENT' })
})

app.listen(port, () => {
  console.log(`Example app listening on http://127.0.0.1:${port}`)
})

// "proxy": "http://127.0.0.1:9000",
