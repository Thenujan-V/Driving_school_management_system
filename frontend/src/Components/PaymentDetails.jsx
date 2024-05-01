import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import VerticalNavbar from './VerticalNavbar'
import { retrieveId } from '../Services/getToken'
import { showDetails } from '../Services/paymentService'

const PaymentDetails = () => {
    const id = retrieveId()

    const [apiPaymentResponse, setApiPaymentResponse] = useState('')

    useEffect(() => {
      const showPaymentDetails = async (id) => {
        try{
          const response = await showDetails(id)
          console.log('paymentRes : ',response)
          setApiPaymentResponse(response)
        }
        catch(error){
          console.log(error)
          setApiPaymentResponse(error)
        }
      }
      showPaymentDetails(id)
    },[])

    const dateObject = apiPaymentResponse.created_date
    const time = new Date(dateObject)
    console.log('date :',time)
    const formattedTime = time.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <div>
        <Navbar />
        <div style={{display:'flex', height:'100vh'}}>
            <VerticalNavbar />
            <div className='UserPaymentDetails' style={{flex:'1'}}>
                <h1>Payment Details</h1>
                <div className="details">
                  <div className="detail-row">
                    <p>Student Name :</p>
                    <span>{apiPaymentResponse.first_name} {apiPaymentResponse.last_name}</span>
                  </div>
                  <div className="detail-row">
                    <p>Payment Method :</p>
                    <span>{apiPaymentResponse.payment_method}</span>
                  </div>
                  <div className="detail-row">
                    <p>Total Amount :</p>
                    <span>{apiPaymentResponse.total_amount}</span>
                  </div>
                  <div className="detail-row">
                    <p>Paid (Exam Amount) :</p>
                    <span>{apiPaymentResponse.paid}</span>
                  </div>
                  <div className="detail-row">
                    <p>Paid (Trial Amount) :</p>
                    <span>{apiPaymentResponse.balance_paid}</span>
                  </div>
                  <div className="detail-row">
                    <p>Date (Exam Payment) :</p>
                    <span>{formattedTime}</span>
                  </div>
                  <div className="detail-row">
                    <p>Date (Trial Payment) :</p>
                    <span>{formattedTime}</span>
                  </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default PaymentDetails