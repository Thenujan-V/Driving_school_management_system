import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import VerticalNavbar from './VerticalNavbar'
import { retrieveId } from '../Services/getToken'
import { showDetails } from '../Services/paymentService'
import { useNavigate } from 'react-router-dom'

const PaymentDetails = () => {
  const navigate = useNavigate();
  const decodedToken = retrieveId()
  const [user_id, setUser_id] = useState('')

  useEffect(() => {
      if(decodedToken){
          setUser_id(decodedToken.id)
  
          if(decodedToken.role === 'admin' || decodedToken.role === 'instructor'){
              navigate('/signin')
          }
      }
      else{
          setUser_id('')
      }
  },[decodedToken])

    const [apiPaymentResponse, setApiPaymentResponse] = useState('')
    const [formattedTime, setFormattedTime] = useState('')
    useEffect(() => {
      const showPaymentDetails = async (user_id) => {
        try{
          const response = await showDetails(user_id)
          console.log('paymentRes : ',response.data[0])
          setApiPaymentResponse(response.data[0])
        }
        catch(error){
          console.log(error)
          setApiPaymentResponse(error)
        }
      }
      showPaymentDetails(user_id)
    },[user_id])

    useEffect(() => {
      if(apiPaymentResponse){
        const dateObject = apiPaymentResponse.created_date
        const time = new Date(dateObject)
        console.log('date :',time)
        const timeLocal = time.toLocaleString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
        setFormattedTime(timeLocal)
      }
    }, [apiPaymentResponse])

  return (
    <div>
        <Navbar />
        <div style={{display:'flex', height:'90vh'}}>
            <VerticalNavbar />
            <div className='UserPaymentDetails' style={{flex:'1'}}>
                <h1>Payment Details</h1>
                <div className="details">
                  <div className="detail-row">
                    <p>Student Name :</p>
                    {
                      apiPaymentResponse ?
                      <span>{apiPaymentResponse.first_name} {apiPaymentResponse.last_name}</span> : ''
                    }
                  </div>
                  <div className="detail-row">
                    <p>Payment Method :</p>
                    {apiPaymentResponse ? <span>{apiPaymentResponse.paymentMethod}</span> : ''}
                  </div>
                  <div className="detail-row">
                    <p>Total Amount :</p>
                    {apiPaymentResponse ? <span>{apiPaymentResponse.total_amount}</span>: ''}
                  </div>
                  <div className="detail-row">
                    <p>Paid (Exam Amount) :</p>
                    {apiPaymentResponse ? <span>{apiPaymentResponse.paid !== null ? `${apiPaymentResponse.paid} LKR`  : <h6>NOT PAY</h6>}</span>: ''}
                  </div>
                  <div className="detail-row">
                    <p>Paid (Trial Amount) :</p>
                    {apiPaymentResponse ? <span>{apiPaymentResponse.balance_paid  === null ? <h6>NOT PAY</h6> : `${apiPaymentResponse.balance_paid} LKR`}</span> : ''}
                  </div>
                  {/* <div className="detail-row">
                    <p>Date (Exam Payment) :</p>
                    {apiPaymentResponse ? <span>{formattedTime}</span> : ''}
                  </div>
                  <div className="detail-row">
                    <p>Date (Trial Payment) :</p>
                    {apiPaymentResponse ? <span>{formattedTime}</span>: ''}
                  </div> */}
                </div>

            </div>
        </div>

    </div>
  )
}

export default PaymentDetails