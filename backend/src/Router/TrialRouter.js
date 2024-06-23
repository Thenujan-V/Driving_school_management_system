var express = require('express')
var router = express.Router()
var trialController = require('../Controller/TrialController')

router.get('/trialdetails/:sId',trialController.trialDetails)
router.put('/result',trialController.trialResult)
router.post('/addtrialdate',trialController.trialDate)
router.get('/studentsdetails',trialController.showStudents)
router.get('/showAllStudents',trialController.showAllStudents)




module.exports = router
