const express = require('express');
const router = express.Router();
var userController = require('../Controller/userController')


router.post('/register',userController.createCustomer)
router.post('/login',userController.signinCustomer)
router.get('/userdetails/:uId',userController.showDetails)
router.post('/updatedetails/:uId',userController.updateDetails)
router.get('/getusers',userController.allUsers)
router.delete('/deleteuser/:user_id',userController.deleteUser)

module.exports = router


