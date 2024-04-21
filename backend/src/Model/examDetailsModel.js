var dbconnection = require('../Config/Db.config');

var exams = function(exam){
    this.exam_date = exam.exam_date;
    this.result = exam.result;
    this.sid = exam.sid;                                                   
}

exams.update_exam_date = function(examDate, result){
    console.log(examDate)
    dbconnection.execute("INSERT INTO exam_details (exam_date, sid) VALUES (?, ?)",
     [examDate.exam_date,examDate.sid] ,function(err,res){
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
    dbconnection.execute("UPDATE exam_details SET result = 1 where sid = ? ", [examResult.sId] ,function(err,res){
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
    dbconnection.execute(`select * from exam_details join students on exam_details.sid = students.sId where exam_details.sid = '${sId}'`, function(err, res){
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