var express = require('express')
var router = express.Router()
var examController = require('../Controller/ExamController')

router.get('/examdetails/:sId',examController.examDetails)
router.put('/result',examController.examResult)
router.post('/addexamdate',examController.examDate)
router.get('/studentsdetails',examController.showStudents)
router.get('/studentsalldetails',examController.showAllStudents)


module.exports = router