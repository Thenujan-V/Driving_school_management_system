var dbconnection = require('../Config/Db.config')

var services = function(service){
    this.service_name = service.service_name;
    this.price = service.price;
    this.description = service.description;  
}
services.add_services = function(data, result){
    dbconnection.query(`insert into services (service_name, price, description, service_class) values (?, ?, ?, ?)`, 
    [data.service_name, data.price, data.description, data.service_class], function(err, res){
        if(err){

            result(err, null)
        }       
        else{
            result(null,res)
        }
    })
}

services.get_services = function(data, result) {
    dbconnection.query(`SELECT * FROM services`, function(err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};


services.update_services = function(data, result){
    dbconnection.query(`insert into services (service_name, price, description) values (?, ?, ?) where sId = ?`, 
    [data.service_name, data.price, data.description, data.sId], function(err, res){
        if(err){

            result(err, null)
        }       
        else{
    
            result (null,res)
        }
    })
}




module.exports = services