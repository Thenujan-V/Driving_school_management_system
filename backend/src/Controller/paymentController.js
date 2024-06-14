var paymentModel = require('../Model/paymentModel')

exports.addTotalPayment = async (req, res) => {
    await paymentModel.add_total_amount(req.body, req.params.sId, function(err, paymentRes){
        if(err){
            return res.status(400).send(err);  
       }            
       else{
           return res.status(200).send(paymentRes)
       }
    })
}

exports.addPayment = async (req, res) => {
    await paymentModel.add_payment(req.body, req.params.sId, function(err, paymentRes){
        if(err){
            return res.status(400).send(err);  
       }            
       else{
           return res.status(200).send(paymentRes)
       }
    })
}
exports.addBalancePayment = async (req,res) => {
    await paymentModel.add_balance_payment(req.body, req.params.sId, function(err, paymentRes){
        if(err){
            return res.status(400).send(err);  
       }            
       else{
           return res.status(200).send(paymentRes)
       }
    })
}
exports.showPayment = async (req, res) => {
    await paymentModel.show_details(req.params.sId, function(err, paymentRes){
        if(err){

            return res.status(400).send(err);  
       }            
       else{
           return res.status(200).send(paymentRes)
       }

    })
}
exports.examEligibleStudents = (req, res) => {
    paymentModel.find_eligible_students(function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(studentRes)
        }
    })
}

exports.trialEligibleStudents = (req, res) => {
    paymentModel.find_trial_eligible_students(function(err, studentRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(studentRes)
        }
    })
}