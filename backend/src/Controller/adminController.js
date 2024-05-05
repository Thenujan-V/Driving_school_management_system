var adminModel = require('../Model/adminModel')

exports.addEmployee = (req, res) => {
    adminModel.signupEmployee(req.body, function(err, adminRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(adminRes)
        }
    })
}
exports.allAdmins = async (req, res) => {
    await adminModel.show_all_admins(function(err, customerRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(customerRes)
        }
    })
}
exports.allInstructers = async (req, res) => {
    await adminModel.show_all_instructers(function(err, customerRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(customerRes)
        }
    })
}