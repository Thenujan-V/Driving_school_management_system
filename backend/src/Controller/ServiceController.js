var servicesModel = require('../Model/ServiceModel')

exports.addServices = (req, res) => {
    servicesModel.add_services(req.body, function(err,serviceRes){        
       if (err){
        return res.status(400).send(err);  
       }            
       else{
           return res.status(200).send(serviceRes)
       }
   });
   
}

exports.getServices = (req, res) => {
    servicesModel.get_services(req, function(err,serviceRes){        
       if (err){
        return res.status(400).send(err);  
       }             
       else{
           return res.status(200).send(serviceRes)
       }
   });
   
}

exports.updateServices = (req, res) => {
    servicesModel.update_services(req.body, function(err,serviceRes){        
       if (err){
        return res.status(400).send(err);  
       }            
       else{
           return res.status(200).send(serviceRes)
       }
   });
   
}