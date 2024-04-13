var examDetailsModel = require('../Model/examDetailsModel')

exports.examDate = (req, res) => {
    examDetailsModel.update_exam_date(req.body, function(err, studentRes){
        if (err){
            return res.status(400).send(err);  
           }            
           else{
               return res.status(200).send(studentRes)
           }
       })
}
exports.examResult = (req, res) => {
    console.log(req.body)
    examDetailsModel.update_result(req.body, function(err, studentRes){
        if (err){
            return res.status(400).send(err);  
           }            
           else{
               return res.status(200).send(studentRes)
           }
       })
}

exports.examDetails = async (req, res) => {
    await examDetailsModel.show_exam_details(req.body, function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(studentRes)
        }
    })
}