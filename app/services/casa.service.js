module.exports = casaService
console.log('here at casa service')

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