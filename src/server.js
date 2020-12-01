const port = 3009

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBases = require('./databases')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/products', (req,res,next) => {
    res.send(dataBases.getProducts()) // Convert to JSON
})

app.get('/products/:id', (req,res,next) => {
    res.send(dataBases.getProducts(req.params.id)) // Convert to JSON
})

app.post('/products', (req,res,next)=>{
    const product = dataBases.saveProduct({
        name: req.body.name, 
        price: req.body.price
    })
    res.send(product) // Convert to JSON
})

app.put('/products/:id', (req,res,next)=>{
    const product = dataBases.saveProduct({
        id: req.params.id,
        name: req.body.name, 
        price: req.body.price
    })
    res.send(product) // Convert to JSON
})

app.delete('/products/:id', (req,res,next)=>{
    const product = dataBases.deleteProduct(req.params.id)
    res.send(product) // Convert to JSON
})

app.listen(port, ()=>{
    console.log(`Server on port ${port}`)
})