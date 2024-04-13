var express = require('express')
var router = express.Router()
var paymentController = require('../Controller/paymentController')


router.post('/addpayment/:sId',paymentController.addPayment)
router.get('/showdetails/:sId',paymentController.showPayment)


module.exports = router