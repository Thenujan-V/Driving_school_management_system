var express = require('express')
var router = express.Router()
var paymentController = require('../Controller/paymentController')


router.put('/addpayment/:sId',paymentController.addPayment)
router.put('/addbalancepayment/:sId',paymentController.addBalancePayment)
router.get('/showdetails/:sId',paymentController.showPayment)
router.get('/showalldetails',paymentController.showAllPayment)
router.post('/addtotalamount/:sId',paymentController.addTotalPayment)
router.get('/exameligiblestudents',paymentController.examEligibleStudents)
router.get('/trialeligiblestudents',paymentController.trialEligibleStudents)


module.exports = router