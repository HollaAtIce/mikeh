const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')
const methodOverride = require('method-override')
const port = process.env.PORT || 3000

// parse application/json
app.use(bodyParser.json())

// pars application/vnd.api+json as json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

// parse applications/x-www-form-urlenconded
app.use(bodyParser.urlencoded({
    extended: true
}))

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'))

// static files =======================================
app.use('/public', express.static(path.join(__dirname, 'public'), {
    fallthrough: false
}))

app.use('/assets', express.static(path.join(__dirname, 'node_modules'), {
    fallthrough: false
}))

// handle 404 =========================================
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.sendStatus(404)
})

app.use((req, res, next) => {
    console.log('Time:' + Date.now())
    next()
})

// app.get('/', (req, res) => {
//   res.send('LECHE2!')
// })

app.use(require('./app/routes/index.routes.js'))

app.listen(port, () => {
  console.log(`On the corner of port ${port}`)
})

module.exports = app