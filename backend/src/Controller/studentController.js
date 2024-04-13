var studentsModel = require('../Model/studentModel')
var examDetailsModel = require('../Model/examDetailsModel')

exports.addStudent = (req, res) => {
    console.log(req.body)
    // var studentDetails = new studentsModel(req.body);

    studentsModel.new_student(req.body ,function(err,studentRes){
       if (err){
        return res.status(400).send(err);  
       }            
       else{
           return res.status(200).send(studentRes)
       }
   });
   
}

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

exports.showDetails = async (req, res) => {
    await studentsModel.show_details(req.body, function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(studentRes)
        }
    })
}

exports.examDetails = async (req, res) => {
    await studentsModel.show_exam_details(req.body, function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(studentRes)
        }
    })
}