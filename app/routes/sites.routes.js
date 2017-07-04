const router = require('express').Router()
const sitesController = require('../controllers/sites.controller')

router.get('*', sitesController.public)
router.get('/public/:slug', sitesController.public)

module.exports = router