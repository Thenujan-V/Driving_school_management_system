var express = require('express')
var router = express.Router()
var adminController = require('../Controller/adminController')


router.post('/register',adminController.addEmployee)
router.post('/workersignin',adminController.workerSignin)
router.get('/getadmins',adminController.allAdmins)
router.get('/getinstructers',adminController.allInstructers)

module.exports = router