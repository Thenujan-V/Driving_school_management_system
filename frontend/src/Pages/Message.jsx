import React, { useEffect, useState } from 'react'
import {VerifyMsgStyle} from '../Components/Styles/index'
import {student_details} from '../Services/studentService'
import {retrieveId} from '../Services/getToken'
import Navbar from '../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Message = () => {

    const id = retrieveId()
    const [apiResponse, setApiResponse] = useState('');

    useEffect(() => {
        const fetchStudentDetails = async (id) => {
          try{
            const response = await student_details(id); 
            setApiResponse('Getting details successful');
          } 
          catch (error){
            console.error('Error fetching student details:', error);
            setApiResponse('Getting details failed');
          }
        };
    
        fetchStudentDetails(id); 
      }, [id])

  return (
    <div id='verify'>
        <Navbar />
        <p>
            Hello thenujan,
            <br />
            <br />
           "Your documents have been successfully verified. To proceed, please make a payment of 25% to secure your exam date. Payment can be made using credit card, debit card, or other online methods.  Alternatively,<br /> you may visit our branch in person to complete the payment."
            <br /> <br />
            Thankyou thenujan. <br /><br />
            <span>If you wish to make the payment online, please <Link to='/' id='btn'>Click here</Link> to proceed.</span>

        </p>
    </div>
  )
}

export default Message