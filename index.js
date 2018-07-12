const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const ctrl = require('./products_controller')

const connectionString = process.env.CONNECTION_STRING

const app = express()
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.post(`/api/product/`, ctrl.create)
app.get('/api/products', ctrl.getAll)
app.get('/api/product/:id', ctrl.getOne)
app.put(`/api/product/:id`, ctrl.update)
app.delete(`/api/product/:id`, ctrl.delete)

massive(connectionString).then( connection => {
    app.set('db', connection)
    app.listen( port, () => {
        console.log(`Started server on port: ${port}`)
    })
}).catch(err => console.log(err))