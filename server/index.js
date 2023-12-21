const express = require("express")

const cors = require("cors")

const app = express()

const queries = require('./queries.js')

const port = 3000

app.use(cors())

app.get('/', (req, res) => {

    res.send("Hello World!")
})

app.get('/api', (req, res) => {

    res.send("Test")
})

app.get('/products', queries.getProducts)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})