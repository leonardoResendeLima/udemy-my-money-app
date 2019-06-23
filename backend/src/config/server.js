const bodyParser = require('body-parser')
const express = require('express')
const queryParser = require('express-query-int')
const server = express()

const cors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)
server.use(queryParser())

const port = 3003

server.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`)
})

module.exports = server

