var studentsModel = require('../Model/studentModel')
var examDetailsModel = require('../Model/examDetailsModel')
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

exports.addStudent = (req, res) => {

    upload.fields([
        { name: 'nic_soft_copy', maxCount: 1 },
        { name: 'medical_soft_copy', maxCount: 1 },
        { name: 'birth_certificate_soft_copy', maxCount: 1 }
    ])(req, res, (err) => {

        if (err) {
console.log(err)
            
            return res.status(400).send(err)
        }
        const newStudent = {
            phone_number: req.body.phone_number,
            birth_date: req.body.birth_date,
            medical_number: req.body.medical_number,
            medical_date: req.body.medical_date,
            vechile_class: req.body.vechile_class,
            nic_number: req.body.nic_number,
            nic_soft_copy: req.files.nic_soft_copy ? req.files.nic_soft_copy[0].path : null,
            medical_soft_copy: req.files.medical_soft_copy ? req.files.medical_soft_copy[0].path : null,
            birth_certificate_soft_copy: req.files.birth_certificate_soft_copy ? req.files.birth_certificate_soft_copy[0].path : null,
            id: req.body.id
        };
    studentsModel.new_student(newStudent, function(err,studentRes){        
       if (err){
        return res.status(400).send(err);  
       }            
       else{
           return res.status(200).send(studentRes)
       }
   });
    })
   
}

exports.showDetails = (req, res) => {
    studentsModel.show_details(req.params.sId, function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(studentRes)
        }
    })
}
exports.showStudents = (req, res) => {
    studentsModel.show_all_students(function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(studentRes)
        }
    })
}

exports.updateDetails = (req, res) => {
    
    studentsModel.update_details(req.body, req.params.sId, function(err, customerRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(customerRes)
        }
    })
}
