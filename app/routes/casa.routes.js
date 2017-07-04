const express = require('express')
const router = express.Router()
const casaController = require('../controllers/casa.controller')()
module.exports = router

// api router
router.get('/', casaController.getAll)

router.use('/', (req, res) => {
    console.log('User Route')
    console.log('Request Type:' + req.method)
    res.send('This page was not found')
})