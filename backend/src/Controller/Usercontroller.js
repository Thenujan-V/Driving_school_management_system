var customerModel = require('../Model/userModel')

exports.createCustomer = async (req, res) => {

    var new_customer = new customerModel(req.body);

    await customerModel.create_customer(new_customer,function(err,userres){
        if (err){
         return res.status(400).send(err);  
        }            
    });
}

exports.signinCustomer = async (req, res) => {
    console.log(req.body)
    customerModel.login(req.body, function(err, customerRes){
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
