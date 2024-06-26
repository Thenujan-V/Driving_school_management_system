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
    examDetailsModel.update_result(req.body, function(err, studentRes){
        if (err){
            return res.status(400).send(err);  
           }            
           else{
               return res.status(200).send(studentRes)
           }
       })
}

exports.examDetails =  (req, res) => {
     examDetailsModel.show_exam_details(req.params.sId, function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(studentRes)
        }
    })
}
exports.showStudents = (req,res) => {
    examDetailsModel.show_exam_students(function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(studentRes)
        }
    })
}

exports.showAllStudents = (req,res) => {
    examDetailsModel.show_all_exam_students(function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(studentRes)
        }
    })
}