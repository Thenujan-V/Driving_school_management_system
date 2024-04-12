const express = require('express')
const router = express.Router();
var studentsController = require('../Controller/studentController')

router.post('/addDetails',studentsController.addStudent)

module.exports = router
