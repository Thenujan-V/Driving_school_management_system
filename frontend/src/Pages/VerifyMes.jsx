import React, { useEffect, useState } from 'react'
import {VerifyMsgStyle} from '../Components/Styles/index'
import {student_details} from '../Services/studentService'
import {retrieveId} from '../Services/getToken'
import Navbar from '../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const VerifyMes = () => {
    
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
            "Your documents are currently being verified. Please allow a few hours for the verification process to complete. Once your documents have been verified, you will need to pay 25% of your total course fee to receive your exam date."
            <br /><br />
            Thankyou thenujan. <br />
            <Link to='/' className='btn btn-warning mt-3'>Okey</Link>
            {/* <Link to='' className='btn btn-warning mt-5' id='payment'>PayNow</Link> */}

        </p>
    </div>
  )
}

export default VerifyMes