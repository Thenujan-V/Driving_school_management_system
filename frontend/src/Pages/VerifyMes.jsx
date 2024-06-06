import React, { useEffect, useState } from 'react'
import {VerifyMsgStyle} from '../Components/Styles/index'
import {student_details} from '../Services/studentService'
import {retrieveId} from '../Services/getToken'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

const VerifyMes = () => {
  const navigate = useNavigate()
  const decodedToken = retrieveId()
  const [user_id, setUser_id] = useState('')

  useEffect(() => {
      if(decodedToken){
          setUser_id(decodedToken.id)
          if(decodedToken.role === 'admin' || decodedToken.role === 'instructer'){
              navigate('/signin')
          }
      }
      else{
          setUser_id('')
      }
  }, [decodedToken])

    const [response, setResponse] = useState('')

    useEffect(() => {
        const fetchStudentDetails = async (user_id) => {
          try{
            const datas = await student_details(user_id);             
            setResponse(datas)
          }
          catch (error){
            console.error('Error fetching student details:', error);
          }
        };
    
        fetchStudentDetails(user_id); 
      }, [user_id])

      // useEffect(() => {
      //   if(response){
      //     const student_status = response.student_status
      //     toggleVerifyData(student_status)
      //   }
      // }, [response])

      // const verifingDatas = document.getElementById('verifing')
      // const verifiedDatas = document.getElementById('verified')
      
      // const toggleVerifyData = (student_status) => {
      //   if(student_status == null){
      //       verifingDatas.style.display = 'block'
      //       verifiedDatas.style.display = 'none'
      //   }
      //   else if(student_status == "verified"){
      //     verifiedDatas.style.display = 'block'
      //     verifingDatas.style.display = 'none'
      //   }
      // }
      return (
      <div id='verify'>
        <Navbar />
        {
          response && response.student_status === null && 
          <p id='verifing'>
              Hello {response && response.first_name},
              <br />
              "Your documents are currently being verified. Please allow a few hours for the verification process to complete. Once your documents have been verified, you will need to pay 25% of your total course fee to receive your exam date."
              <br /><br />
              Thankyou {response && response.first_name}. <br />
              <Link to='/' className='btn btn-warning mt-3'>Okey</Link>
          </p>
        }

        {
          response && response.student_status === "verified" &&
          <p id='verified'>
              Hello {response && response.first_name},
              <br />
              <br />
            "Your documents have been successfully verified. To proceed, please make a payment of 25% to secure your exam date. Payment can be made using credit card, debit card, or other online methods.  Alternatively,<br /> you may visit our branch in person to complete the payment."
              <br /> <br />
              Thankyou {response && response.first_name}. <br /><br />
              <span>If you wish to make the payment online, please <Link to='/payment' id='btn'>Click here</Link> to proceed.</span>

          </p>
        }
      </div>
  )
}

export default VerifyMes