const _ = require('lodash')

module.exports = (req, res, next) => {
    const bundles = res.locals.bundle

    if (bundles.errors) {
        const errors = parseErrors(bundles.errors)
        res.status(500).json(errors)
    } else {
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}