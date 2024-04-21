var express = require('express')
var router = express.Router()
var timeController = require('../Controller/timeController')

router.post('/addtime',timeController.addTime)
router.post('/attendance',timeController.attendance)
router.get('/showtime/:sId',timeController.showTimeTable)



module.exports = router
