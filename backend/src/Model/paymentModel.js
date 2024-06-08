var dbconnection = require('../Config/Db.config')

var payments = function(payment){
    this.balance = payment.balance;
    this.paid = payment.paid;
    this.total_amount = payment.total_amount;  
}
payments.add_total_amount = function(paymentInfo, sId, result){
    dbconnection.query(`insert into payment_details (total_amount, sId) values (?, ?)`, 
    [paymentInfo.total_amount, sId], function(err, res){
        if(err){

            result(err, null)
        }       
        else{
    
            result (null,'true')
        }
    })
}
payments.add_payment = function(paymentInfo, sId, result){
    console.log('payment paid :', paymentInfo.paid)
    dbconnection.query(`update payment_details set paid = ?, paymentStatus = ?, paymentMethod = ? where sId = '${sId}'`, [paymentInfo.paid, 'half', 'card'], function(err, res){
        if (err) {
            console.error('Error updating payment details:', err);
            result(err, null)
        } 
        else {
            console.log('Rows affected:', res.affectedRows);
                if (res.affectedRows === 0) {
                    console.log(`No rows found with sId = ${sId}`);
                    result(null, 'faild')                } 
                else {
                    console.log('Payment details updated successfully');
                    result(null, 'okey')                
                }
        }
    })
}

payments.add_balance_payment = function(paymentInfo, sId, result){
    console.log('amount :', paymentInfo.paid)
    dbconnection.query(`update payment_details set balance_paid = ?, paymentStatus = ? where sId = '${sId}'`, [paymentInfo.paid, 'full'], function(err, res){
        if (err) {
            console.error('Error updating payment details:', err);
            result(err, null)
        } 
        else {
            console.log('Rows affected:', res.affectedRows);
                if (res.affectedRows === 0) {
                    console.log(`No rows found with sId = ${sId}`);
                    result(null, 'faild')                } 
                else {
                    console.log('Payment details updated successfully');
                    result(null, 'okey')                
                }
        }
    })
}

payments.show_details = function(sId, result){
    dbconnection.query(`select * from payment_details p join new_customers c on p.sId = c.id where sId = '${sId}'`, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(null, res)
        }
    })
}
payments.find_eligible_students = function(result){
    const sql = `SELECT * FROM payment_details p JOIN new_customers c ON p.sId = c.id join students s on s.id = p.sId  WHERE paymentStatus = ?`
    dbconnection.query(sql, ['half'], function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(null,res)
        }
    })
} 

payments.find_trial_eligible_students = function(result){
    const sql = `SELECT * FROM payment_details p JOIN new_customers c ON p.sId = c.id join students s on s.id = p.sId WHERE paymentStatus = ?`
    dbconnection.query(sql, ['full'], function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(null,res)
        }
    })
}






module.exports = payments