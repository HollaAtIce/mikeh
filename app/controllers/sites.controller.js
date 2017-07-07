const path = require('path')

module.exports = {
    public: (req, res, next) => {
        res.sendFile('public/index.html', {
            root: path.join(__dirname, '../..')
        })
    }
}