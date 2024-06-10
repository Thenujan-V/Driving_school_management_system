var dbconnection = require('../Config/Db.config');

var exams = function(exam){
    this.exam_date = exam.exam_date;
    this.result = exam.result;
    this.sid = exam.sid;                                                   
}

exams.update_exam_date = function(examDate, result){
    console.log('examdateee : ',examDate)
    dbconnection.execute("INSERT INTO exam_details (exam_date, sid, attempt) VALUES (?, ?, ?)",
     [examDate.exam_date, examDate.sid, examDate.attempt] ,function(err,res){
        if(err){
            console.log(err)
            result(err,null);             
        } 
        else{
            console.log(res);
            result(null, res);
        }
    })
}

exams.update_result = function(examResult, result){
    console.log(examResult)
    dbconnection.execute("UPDATE exam_details SET result = ? where sid = ? order by attempt desc limit 1", [examResult.result,examResult.sId] ,function(err,res){
        if(err){
            result(err,null);             
        } 
        else{
            console.log(res);
            result(null, res);
        }  
    })
}

exams.show_exam_details = function(sId, result){
    console.log('sid : ',sId)
    dbconnection.execute(`select * from exam_details join students on exam_details.sid = students.id where exam_details.sid = ?`,[sId], function(err, res){
        if(err){
            result(err,null);             
        } 
        else{
            // console.log(res);
            result(null, res);
        }  
    })
}
exams.show_exam_students = function(result){
    dbconnection.execute(`select * from exam_details e join new_customers c on e.sid = c.id where e.result is null`, function(err, res){
        if(err){
            result(err,null);             
        } 
        else{
            console.log(res);
            result(null, res);
        } 
    })
}
module.exports = exams