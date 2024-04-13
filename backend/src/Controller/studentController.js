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

exports.updateDetails = async (req, res) => {
    
    await studentsModel.update_details(req.body, req.params.sId, function(err, customerRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(customerRes)
        }
    })
}
