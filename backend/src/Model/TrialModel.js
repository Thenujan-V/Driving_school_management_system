var dbconnection = require('../Config/Db.config');

var trials = function(trial){
    this.trial_date = trial.trial_date;
    this.result = trial.result;
    this.sid = trial.sid;                                                   
}

trials.update_trial_date = function(trialDate, result){
    console.log('trialdateee : ',trialDate)
    dbconnection.execute("INSERT INTO trial_details (trial_date, sid, attempt) VALUES (?, ?, ?)",
     [trialDate.exam_date, trialDate.sid, trialDate.attempt] ,function(err,res){
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

trials.update_result = function(trialResult, result){
    console.log(trialResult)
    dbconnection.execute("UPDATE trial_details SET result = ? where sid = ? order by attempt desc limit 1", [trialResult.result,trialResult.sId] ,function(err,res){
        if(err){
            result(err,null);             
        } 
        else{
            console.log(res);
            result(null, res);
        }  
    })
}

trials.show_trial_details = function(sId, result){
    dbconnection.execute(`select * from trial_details t join students s on t.sid = s.id where t.sid = ?`,[sId], function(err, res){
        if(err){

            result(err,null);             
        } 
        else{
            result(null, res);
        }  
    })
}
trials.show_trial_students = function(result){
    dbconnection.execute(`select * from trial_details e join new_customers c on e.sid = c.id where e.result is null`, function(err, res){
        if(err){
            result(err,null);             
        } 
        else{
            console.log(res);
            result(null, res);
        } 
    })
}

trials.show_all_trial_students = function(result){
    dbconnection.execute(`select * from trial_details e join new_customers c on e.sid = c.id`, function(err, res){
        if(err){
            result(err,null);             
        } 
        else{
            console.log(res);
            result(null, res);
        } 
    })
}
module.exports = trials