var dbconnection = require('../Config/Db.config');

var customer = function(customer){
    this.first_name = customer.first_name;
    this.last_name = customer.last_name;
    this.email  = customer.email;
    this.password = customer.password ;
}

customer.create_customer = function(newcustomer,result){
   console.log(newcustomer)
    dbconnection.execute("INSERT INTO new_customers (first_name, last_name, email, password) VALUES (?, ?, ?, ?)", [newcustomer.first_name, newcustomer.last_name, newcustomer.email, newcustomer.password] ,function(err,res){
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

customer.sigin_customer = function(userInfo, result){
    var sql = `SELECT *  FROM new_customers WHERE Username='${userInfo.Username}'`
    dbconnection.query(sql, function(err, res){
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