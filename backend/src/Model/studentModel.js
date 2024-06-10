var dbconnection = require('../Config/Db.config');
const path = require('path');

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
    this.id = student.id;
}
students.new_student = function(newStudent, result){
    dbconnection.execute("INSERT INTO students (phone_number, birth_date, medical_number, medical_date, vechile_class, nic_number, nic_soft_copy, medical_soft_copy, birth_certificate_soft_copy, id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
     [newStudent.phone_number, newStudent.birth_date, newStudent.medical_number, newStudent.medical_date, newStudent.vechile_class, newStudent.nic_number, newStudent.nic_soft_copy, newStudent.medical_soft_copy, newStudent.birth_certificate_soft_copy, newStudent.id] ,function(err,res){
        if(err){
            result(err,null);             
        } 
        else{
            result(null, res);
        }
    })
}

students.show_details = function(sId, result){
    var sql = `SELECT * FROM students join new_customers on students.id = new_customers.id WHERE students.id = '${sId}'`
    dbconnection.query(sql, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            if (res.length) {
                const student = res[0];
                student.nic_soft_copy_url = `uploads/${path.basename(student.nic_soft_copy.toString())}`;
                student.medical_soft_copy_url = `uploads/${path.basename(student.medical_soft_copy.toString())}`;
                student.birth_certificate_soft_copy_url = `uploads/${path.basename(student.birth_certificate_soft_copy.toString())}`;
                result(null, student);
            } else {
                result({ kind: "not_found" }, null);
            }
        }
    })
}
students.show_all_students = function(result){
    var sql = `select * from students join new_customers on students.id = new_customers.id`
    dbconnection.query(sql, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(null, res)
        }
    })
}
students.show_exam_details = function(sId, result){
    var sql = `SELECT * FROM exam_details WHERE sId = '${sId}'`
    dbconnection.query(sql, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(null,res)
        }
    })
}

students.update_details = function(studentUpdate, sId, result){
    let query = "UPDATE students SET ";
    const updates = [];


    for (const attribute in studentUpdate) {
        updates.push(`${attribute} = '${studentUpdate[attribute]}'`);
    }

    query += updates.join(", ");
    query += ` WHERE id = ${sId}`;

    dbconnection.query(query, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(null,res)
        }
    })
}


module.exports = students