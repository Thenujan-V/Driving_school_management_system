var express = require('express')
var router = express.Router()
var paymentController = require('../Controller/paymentController')


router.put('/addpayment/:sId',paymentController.addPayment)
router.get('/showdetails/:sId',paymentController.showPayment)
router.post('/addtotalamount/:sId',paymentController.addTotalPayment)


module.exports = router