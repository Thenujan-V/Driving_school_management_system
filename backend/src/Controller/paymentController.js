var paymentModel = require('../Model/paymentModel')

exports.addPayment = async (req, res) => {
    console.log(req.body)

    await paymentModel.add_payment(req.body, req.params.sId, function(err, paymentRes){
        if(err){
            return res.status(400).send(err);  
       }            
       else{
        console.log(res.body)
           return res.status(200).send(paymentRes)
       }
    })
}

exports.showPayment = async (req, res) => {
    await paymentModel.show_details(req.params.sId, function(err, paymentRes){
        if(err){
            console.log(err)

            return res.status(400).send(err);  
       }            
       else{
           return res.status(200).send(paymentRes)
       }

    })
}