module.exports = (req, res, next) => {
    res.header('Access-Allow-Control-Origin', '*')
    res.header('Access-Allow-Control-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    res.header('Access-Allow-Control-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}