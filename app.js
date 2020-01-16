const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const routesUsed = require('./routes/route')


app.use(bodyParser.urlencoded({extended: false}))

app.use(routesUsed)

app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(5000)