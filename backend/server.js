const express = require('express')
const app = express()
const port = 9000
const path = require('path')
const cors = require('cors')
const fs = require('fs')

const whitelist = ['http://127.0.0.1:3000', 'http://localhost:3000']
const options = {
  origin: whitelist,
}

app.use(cors(options))

app.get('/', (req, res) => {
  console.log('provide all ship for homepage')
  fs.readFile(path.join(__dirname, '/SHIPS_DATA/ships.json'), (err, data) => {
    if (err) return res.status(400).send({ success: false, message: 'No availabe ships' })
    const shipsData = JSON.parse(data)
    res.status(200).send(shipsData)
  })
})

app.get('/img/:id', (req, res) => {
  const fileId = parseInt(req.params.id)

  fs.readFile(path.join(__dirname, '/SHIPS_DATA/ships.json'), (err, data) => {
    const shipsData = JSON.parse(data)
    const ship = shipsData.find((shipObj) => (shipObj.id === fileId ? shipObj.img : null))
    const options = {
      root: path.join(__dirname, `/SHIPS_DATA/imgs/yachts-for-sale/`),
    }

    res.sendFile(`${ship.img}`, options, (err) => {
      if (err) {
        console.error('error', err)
      } else console.log('file sent')
    })
  })
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
