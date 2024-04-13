var customerModel = require('../Model/userModel')

exports.createCustomer =  (req, res) => {

    var new_customer = new customerModel(req.body);

     customerModel.create_customer(new_customer,function(err,userres){
        if (err){
         return res.status(400).send(err);  
        }            
        else{
            return res.status(200).send(userres)
        }
    });
}

exports.signinCustomer = async (req, res) => {
    console.log(req.body)
    await customerModel.sigin_customer(req.body, function(err, customerRes){
        if(err){
            return res.send(err)
        }
        else{
            var results = JSON.parse(JSON.stringify(customerRes))
            if(req.body.password == results.password){
                return true;
            }
            else{
                return false;
            }
        }
    })
}

exports.showDetails = async (req, res) => {
    await customerModel.show_details(req.body, function(err, customerRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(customerRes)
        }
    })
}

exports.updateDetails = async (req, res) => {
    
    await customerModel.update_details(req.body, req.params.uId, function(err, customerRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(customerRes)
        }
    })
}
