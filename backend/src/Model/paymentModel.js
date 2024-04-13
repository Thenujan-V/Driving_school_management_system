var dbconnection = require('../Config/Db.config')

var payments = function(payment){
    this.balance = payment.balance;
    this.paid = payment.paid;
    this.total_amount = payment.total_amount;  
}
payments.add_payment = function(paymentInfo, sId, result){

    dbconnection.query('insert into payment_details (balance, paid, total_amount, sId) values (?, ?, ?, ?)', 
    [paymentInfo.balance, paymentInfo.paid, paymentInfo.total_amount, sId], function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result ('true')
        }
    })
}

payments.show_details = function(sId, result){
    dbconnection.query(`select * from payment_details where sId = '${sId}'`, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(null, res)
        }
    })
}

module.exports = payments