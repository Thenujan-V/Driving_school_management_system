var dbconnection = require('../Config/Db.config');

var trials = function(trial){
    this.trial_date = trial.trial_date;
    this.result = trial.result;
    this.sid = trial.sid;                                                   
}

trials.update_trial_date = function(trialDate, result){
    console.log('trialdateee : ',trialDate)
    dbconnection.execute("INSERT INTO trialdetails (trial_date, sid) VALUES (?, ?)",
     [trialDate.trial_date,trialDate.sid] ,function(err,res){
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
    dbconnection.execute("UPDATE trialdetails SET result = ? where sid = ? ", [trialResult.result,trialResult.sId] ,function(err,res){
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
    dbconnection.execute(`select * from trialdetails join students on trialdetails.sid = students.id where trialdetails.sid = ?`,[sId], function(err, res){
        if(err){
            result(err,null);             
        } 
        else{
            result(null, res);
        }  
    })
}
trials.show_trial_students = function(result){
    dbconnection.execute(`select * from trialdetails e join new_customers c on e.sid = c.id where e.result is null`, function(err, res){
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