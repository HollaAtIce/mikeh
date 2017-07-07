module.exports = casaService

function casaService(options) {
    // let Casa

    // if (!options.modelService) {
    //     throw new Error('Options.modelService is required')
    // }

    // Casa = options.modelService

    return {
        getAll
    }

    function getAll() {
        return Casa.find()
    }
}