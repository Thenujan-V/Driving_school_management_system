var dbconnection = require('../Config/Db.config')

var services = function(service){
    this.service_name = service.service_name;
    this.price = service.price;
    this.description = service.description;  
}
services.add_services = function(data){
    dbconnection.query(`insert into services (service_name, price, description) values (?, ?, ?)`, 
    [data.service_name, data.price, data.description], function(err, res){
        if(err){

            result(err, null)
        }       
        else{
    
            result (null,res)
        }
    })
}

services.get_services = function(data){
    dbconnection.query(`select * from services`,  function(err, res){
        if(err){

            result(err, null)
        }       
        else{
    
            result (null,res)
        }
    })
}

services.update_services = function(data){
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