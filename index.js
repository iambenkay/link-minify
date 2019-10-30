const express = require('express')
const cors = require('cors')
const app = express()

require('./config')()

app.use(cors())
app.use(express.json())

app.use(require('./routes'))

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server started listening on ${port}`)
})
