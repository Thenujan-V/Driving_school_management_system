import React, { useEffect, useState } from 'react'
import {VerifyMsgStyle} from '../Components/Styles/index'
import {student_details} from '../Services/studentService'
import {retrieveId} from '../Services/getToken'
import Navbar from '../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const VerifyMes = () => {
    
    const id = retrieveId()
    const [response, setResponse] = useState('')
    const [apiResponse, setApiResponse] = useState('');

    useEffect(() => {
        const fetchStudentDetails = async (id) => {
          try{
            const datas = await student_details(id); 
            setResponse(datas)
            setApiResponse('Getting details successful');
          }
          catch (error){
            console.error('Error fetching student details:', error);
            setApiResponse('Getting details failed');
          }
        };
    
        fetchStudentDetails(id); 
      }, [id])

      useEffect(() => {
        if(response){
          const student_status = response.student_status
          toggleVerifyData(student_status)
        }
      }, [response])

      const verifingDatas = document.getElementById('verifing')
      const verifiedDatas = document.getElementById('verified')
      
      const toggleVerifyData = (student_status) => {
        if(student_status == null){
            verifingDatas.style.display = 'block'
            verifiedDatas.style.display = 'none'
        }
        else if(student_status == "verified"){
          verifiedDatas.style.display = 'block'
          verifingDatas.style.display = 'none'
        }
      }
console.log('sss : ',response)
      return (
      <div id='verify'>
        <Navbar />
        <p id='verifing'>
            Hello {response.first_name},
            <br />
            "Your documents are currently being verified. Please allow a few hours for the verification process to complete. Once your documents have been verified, you will need to pay 25% of your total course fee to receive your exam date."
            <br /><br />
            Thankyou {response.first_name}. <br />
            <Link to='/' className='btn btn-warning mt-3'>Okey</Link>
        </p>

        <p id='verified'>
            Hello {response.first_name},
            <br />
            <br />
           "Your documents have been successfully verified. To proceed, please make a payment of 25% to secure your exam date. Payment can be made using credit card, debit card, or other online methods.  Alternatively,<br /> you may visit our branch in person to complete the payment."
            <br /> <br />
            Thankyou {response.first_name}. <br /><br />
            <span>If you wish to make the payment online, please <Link to='/payment' id='btn'>Click here</Link> to proceed.</span>

        </p>
      </div>
  )
}

export default VerifyMes