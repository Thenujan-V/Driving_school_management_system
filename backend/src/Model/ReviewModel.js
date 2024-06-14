var dbconnection = require('../Config/Db.config')

var reviews = function(review){
    this.rating = review.rating;
    this.review = review.review;
    this.id = review.id;  
}
reviews.add_review = function(reviewInfo, result){
    dbconnection.query(`insert into rate (rating, review, id) values (?, ?, ?)`, 
    [reviewInfo.rating, reviewInfo.review, reviewInfo.id], function(err, res){
        if(err){

            result(err, null)
        }       
        else{
            result (null,res)
        }
    })
}


reviews.get_review = function(result){
    dbconnection.query(`select * from rate`, function(err, res){
        if(err){
            result(err, null)
        }       
        else{
            result (null,res)
        }
    })
}



module.exports = reviews