var express = require('express')
var router = express.Router()
var reviewController = require('../Controller/ReviewController')


router.post('/addreview',reviewController.addReview)
router.get('/getreview',reviewController.getReview)



module.exports = router