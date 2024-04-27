var studentsModel = require('../Model/studentModel')
var examDetailsModel = require('../Model/examDetailsModel')

exports.addStudent = (req, res) => {
    studentsModel.new_student(req.body, req.params.vechile_class, function(err,studentRes){
    console.log(req.params.vechile_class)
        
       if (err){
        return res.status(400).send(err);  
       }            
       else{
           return res.status(200).send(studentRes)
       }
   });
   
}

exports.showDetails = async (req, res) => {
    console.log('req:   ',req.body)

    await studentsModel.show_details(req.params.sId, function(err, studentRes){
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
