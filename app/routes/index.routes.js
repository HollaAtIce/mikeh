const express = require('express')
const router = express.Router()

const casaRoutes = require('./casa.routes')
// const usersRoutes = require('./users.routes')
const sitesRoutes = require('./sites.routes')
// const aboutRoutes = require('./about.routes')

// register routes ///////
router.use('/api/casa', casaRoutes)
// router.use('/api/users', usersRoutes)
router.use('/api/sites', sitesRoutes)
// router.use('/api/about', aboutRoutes)

router.use('/api/*', (req, res, next) => {
    res.sendStatus(404)
})

router.use(sitesRoutes)

// handle API 500
router.use((err, req, res, next) => {
    // If the error object doesn't exists
    if (!err) {
        return next()
    }
    // Log it
    console.error(err.stack)

    // Redirect to error page
    res.sendStatus(500)
})

module.exports = router