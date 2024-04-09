var customerModel = require('../Model/userModel')

exports.createCustomer = async (req, res) => {

    var new_customer = new customerModel(req.body);

    await customerModel.create_customer(new_customer,function(err,userres){
        if (err){
         return res.status(400).send(err);  
        }            
    });
}
