const express = require('express')
const router = express.Router();
var studentsController = require('../Controller/studentController')

router.post('/addDetails',studentsController.addStudent)
router.get('/studentdetails',studentsController.showDetails)
router.post('/updatedetails/:sId',studentsController.updateDetails)


module.exports = router
