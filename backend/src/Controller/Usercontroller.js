const con = require('../Config/Db.config');
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
    await customerModel.sigin_customer(req.body, function(err, customerRes){
        if(err){
            return res.send(err)
        }
        else if(customerRes.length === 0){
            console.log("noooo")
            return res.send('false')
        }
        else{
            var results = JSON.parse(JSON.stringify(customerRes))
console.log(customerRes)
            const res_password = results[0].password
            const req_password = req.body.password

            if(res_password == req_password){
                return res.send('true');
            }
            else{
                return res.send('false');
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
