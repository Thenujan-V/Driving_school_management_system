const express = require('express')
const router = express.Router();
var studentsController = require('../Controller/studentController')

router.post('/addDetails',studentsController.addStudent)
router.get('/studentdetails/:sId',studentsController.showDetails)
router.post('/updatedetails/:sId',studentsController.updateDetails)
router.get('/showstudents',studentsController.showStudents)



module.exports = router
