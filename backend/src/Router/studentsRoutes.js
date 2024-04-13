const express = require('express')
const router = express.Router();
var studentsController = require('../Controller/studentController')

router.post('/addDetails',studentsController.addStudent)
router.post('/addexamdate',studentsController.examDate)
router.get('/studentdetails',studentsController.showDetails)
router.get('/examdetails',studentsController.examDetails)
router.put('/result',studentsController.examResult)

module.exports = router