var dbconnection = require('../Config/Db.config');

var students = function(student){
    this.phone_number = student.phone_number;
    this.birth_date = student.birth_date;
    this.medical_number = student.medical_number;
    this.medical_date = student.medical_date;
    this.vechile_class = student.vechile_class;
    this.nic_number = student.nic_number;
    this.nic_soft_copy = student.nic_soft_copy;
    this.medical_soft_copy = student.medical_soft_copy;
    this.birth_certificate_soft_copy = student.birth_certificate_soft_copy;
}
students.new_student = function(newStudent, result){
    console.log(newStudent)
    dbconnection.execute("INSERT INTO students (phone_number, birth_date, medical_number, medical_date, vechile_class, nic_number, nic_soft_copy, medical_soft_copy, birth_certificate_soft_copy) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
     [newStudent.phone_number, newStudent.birth_date, newStudent.medical_number, newStudent.medical_date, newStudent.vechile_class, newStudent.nic_number, newStudent.nic_soft_copy, newStudent.medical_soft_copy, newStudent.birth_certificate_soft_copy] ,function(err,res){
        if(err){
            result(err,null);             
        } 
        else{
            console.log(res);
            result(null, res);
        }
    })
}

module.exports = students