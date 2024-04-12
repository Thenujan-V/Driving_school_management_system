var studentsModel = require('../Model/studentModel')

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
