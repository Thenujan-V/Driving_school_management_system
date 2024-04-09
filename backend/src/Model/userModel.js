var dbconnection = require('../Config/Db.config');

var customer = function(customer){
    this.first_name = customer.first_name;
    this.last_name = customer.last_name;
    this.email  = customer.email;
    this.Password = customer.Password ;
}

customer.create_customer = function(newcustomer,result){
   console.log(newcustomer)
    dbconnection.query("INSERT INTO new_customers (first_name, last_name, email, Password) VALUES ?", [newcustomer] ,function(err,res){
        if(err){
            console.log("customer customer error",err)
            result(err,null);     
                
        } 
        else{
            console.log(res);
            result(null, res);
        }
    })
}


module.exports = customer