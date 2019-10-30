const express = require('express')
const url = require('url')
const cors = require('cors')
const validUrl = require('valid-url')
const shortid = require('shortid')
const app = express()

require('./config')()

app.use(cors())
app.use(express.json())

app.post('/api/v1/new', (req, res) => {
    const {url} = req.body
    const URI = validUrl.isWebUri(url)

    if(!URI) return res.status(400).send({error: "Invalid URL provided"})
    return res.send({url: URI, link: shortid.generate()})
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server started listening on ${port}`)
})