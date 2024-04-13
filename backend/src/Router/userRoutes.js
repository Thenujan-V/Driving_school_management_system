const express = require('express');
const router = express.Router();
var userController = require('../Controller/userController')


router.post('/register',userController.createCustomer)
router.post('/login',userController.signinCustomer)
router.get('/userdetails',userController.showDetails)
router.post('/updatedetails/:uId',userController.updateDetails)

module.exports = router

