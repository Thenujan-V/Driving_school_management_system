var express = require('express')
var router = express.Router()
var examController = require('../Controller/ExamController')

router.get('/examdetails/:sId',examController.examDetails)
router.put('/result',examController.examResult)
router.post('/addexamdate',examController.examDate)


module.exports = router