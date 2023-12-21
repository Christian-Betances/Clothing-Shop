const express = require("express")
const cors = require("cors")

const app = express()

const port = 3000

app.use(cors())

app.get('/api', (req, res) => {

    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})