const express = require('express')
const router = express.Router();
var serviceController = require('../Controller/ServiceController')

router.post('/addservices',serviceController.addServices)
router.get('/getservices',serviceController.getServices)
router.put('/updateservices',serviceController.updateServices)



module.exports = router