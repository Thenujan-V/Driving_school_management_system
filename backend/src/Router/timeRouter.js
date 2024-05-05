var express = require('express')
var router = express.Router()
var timeController = require('../Controller/timeController')

router.post('/addtime',timeController.addTime)
router.post('/attendance/:tId',timeController.attendance)
router.get('/showtime/:sId/:first_name',timeController.showTimeTable)



module.exports = router
