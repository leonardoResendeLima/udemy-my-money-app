const express = require('express')
const router = express.Router()
const BillingCycle = require('../api/billingCycle/billingCycleService')

module.exports = function (server) { 
    server.use('/api', router)
    server.get('/api', function(req, res) {
            res.json({
                    data: new Date(),
		    message: 'Server is Working'
            })
    })
    BillingCycle.register(router, '/billingCycles')

}
