var reviewModel = require('../Model/ReviewModel')

exports.addReview =  (req, res) => {
    reviewModel.add_review(req.body, function(err, reviewRes){
        if(err){
            return res.status(400).send(err);  
       }            
       else{
           return res.status(200).send(reviewRes)
       }
    })
}


exports.getReview =  (req, res) => {
    reviewModel.get_review(function(err, reviewRes){
        if(err){
            return res.status(400).send(err);  
       }            
       else{
           return res.status(200).send(reviewRes)
       }
    })
}