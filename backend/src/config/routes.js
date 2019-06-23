const express = require('express')
const router = express.Router()
const BillingCycle = require('../api/billingCycle/billingCycleService')

module.exports = function (server) {  
    server.use('/api', router)
    
    BillingCycle.register(router, '/billingCycle')
}