//const responses = require('../models/responses')
//const casaModel = require('../models/casa')
const casaService = require('../services/casa.service')
// ({
//     modelService: casaModel
// })

module.exports = casaController

function casaController() {
    return {
        getAll
    }

    function getAll(req, res) {
        casaService.getAll()
            .then((casa) => {
                res.json(casa)
            }).catch((err) => {
                res.status(500).send(err)
            })
    }
}