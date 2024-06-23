 var trialDetailsModel = require('../Model/TrialModel')

exports.trialDate = (req, res) => {
    console.log('req ',req.body)
    trialDetailsModel.update_trial_date(req.body, function(err, studentRes){
        if (err){
            console.log(err)
            return res.status(400).send(err);  
           }            
           else{
            console.log(studentRes)
               return res.status(200).send(studentRes)
           }
       })
}
exports.trialResult = (req, res) => {
    trialDetailsModel.update_result(req.body, function(err, studentRes){
        if (err){
            return res.status(400).send(err);  
           }            
           else{
               return res.status(200).send(studentRes)
           }
       })
}

exports.trialDetails =  (req, res) => {
     trialDetailsModel.show_trial_details(req.params.sId, function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
    console.log('res', studentRes)

            return res.send(studentRes)
        }
    })
}
exports.showStudents = (req,res) => {
    trialDetailsModel.show_trial_students(function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(studentRes)
        }
    })
}

exports.showAllStudents = (req,res) => {
    trialDetailsModel.show_all_trial_students(function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(studentRes)
        }
    })
}
