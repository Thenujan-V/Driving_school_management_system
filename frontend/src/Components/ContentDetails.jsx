import React, { useEffect, useState } from 'react'
import { ContentDetailsStyle } from './Styles'
import{userDetails} from '../Services/userService'
import{retrieveId} from '../Services/getToken'
import{show_exam_details} from '../Services/examServices'
import { Link, useNavigate } from 'react-router-dom'
import { student_details } from '../Services/studentService'
import { showDetails } from '../Services/paymentService'
import { show_trial_details } from '../Services/TrialServices'


const ContentDetails = () => {
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

    const [userresponse, setUserResponse] = useState('')
    const [examResponse, setExamResponse] = useState('')
    const [apiResponse, setApiResponse] = useState('')
    const [trialDetails, setTrialDetails] = useState('')
    
    useEffect(() => {
        const fetchStudentData = async (user_id) => {
            try{
                const userData = await userDetails(user_id)
                setUserResponse(userData)
                setApiResponse('success to retrivedata')
            }
            catch(error){
                setApiResponse('Faild to retrivedata')
            }
        
        }

        const fetchExamDetails = async (user_id) => {
            try{
                const userExamData = await show_exam_details(user_id)
                console.log('user   ',userExamData)
                setExamResponse(userExamData)
                setApiResponse('success to retrivedata')
            }
            catch(error){
                setApiResponse('Faild to retrivedata')
            }
        }
        fetchStudentData(user_id)
        fetchExamDetails(user_id)


    }, [user_id])

    const [response, setResponse] = useState('')

    useEffect(() => {
        const fetchStudentDetails = async (user_id) => {
          try{
            const datas = await student_details(user_id);  
            console.log('data :', datas.data)           
            setResponse(datas.data)
          }
          catch (error){
            console.error('Error fetching student details:', error);
          }
        };
    
        fetchStudentDetails(user_id); 
      }, [user_id])
    
    const [payments, setPayments] = useState('')


      useEffect(() => {
        const fetchPaymentDetails = async (user_id) => {
            try{
                const paymentResponse = await showDetails(user_id)
                console.log('pay :', paymentResponse.data)
                setPayments(paymentResponse.data)
            }
            catch(error){
                console.log('error :', error)
            }
        }
        fetchPaymentDetails(user_id)

      }, [user_id])

      useEffect(() => {
        const fetchPaymentDetails = async (user_id) => {
            try{
                const paymentResponse = await show_trial_details(user_id)
                setTrialDetails(paymentResponse)
            }
            catch(error){
                console.log('error :', error)
            }
        }
        fetchPaymentDetails(user_id)

      }, [user_id])
      console.log('tra :', trialDetails)
    
  return (
    <div id='contentPage'>
        <div className="container" id='content'>    
            <div className="row">
                <div id="img" className='col-lg-6 col-md-6 col-12'></div>
                    <div className='col-lg-6 col-md-6 col-12' id="notAssignd">
                        {
                            response && response.student_status === null && payments && payments[0].paymentStatus === null &&
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
                            response && response.student_status === "verified" && payments && payments[0].paymentStatus === null &&
                            <p id='verified'>
                                Hello {response && response.first_name},
                                <br />
                                <br />
                                "Your documents have been successfully verified. To proceed, please make a payment of 25% to secure your exam date. Payment can be made using credit card, debit card, or other online methods.  Alternatively,<br /> you may visit our branch in person to complete the payment."
                                <br /> <br />
                                Thankyou {response && response.first_name}. <br /><br />
                                <span>If you wish to make the payment online, please <Link to='/payment' id='btn' style={{color:'darkblue'}}>Click here</Link> to proceed.</span>

                            </p>
                        }
                    </div>
                    
                        {!examResponse && payments && payments[0].paymentStatus === 'half' &&
                            <div id="notAssignd" className='col-lg-6 col-md-6 col-12'>
                            <h1>For You</h1>
                            <p>
                                "Hello {response.first_name} <br /> You are eligible to take the examination!" <br />
                                <span>waiting some hours for your exam date</span> <br /><br />
                                You are allowed up to three attempts to pass the exam. If you do not pass after three attempts,
                                you will need to restart from step one and pay 25% of the full course fee. <br /><br />Our driving school offers examination 
                                preparation classes and practice exams, 
                                which students are welcome to attend free of charge. These resources can help you succeed on your first attempt. <br /><br />
                                If you successfully pass the exam, you may apply for the trial period after a 90-day wait
                            </p>
                        </div>}
                {examResponse && examResponse.result === null && <div id="foryou" className='col-lg-6 col-md-6 col-12'>
                    <h1>For You</h1>
                    <p>
                        "Hello {response.first_name} <br /> You are eligible to take the examination!" <br />
                        <span>Your exam date is scheduled for {new Date(examResponse.exam_date).toLocaleDateString('en-GB', {
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric'
                    })}</span> <br /><br />
                        You are allowed up to three attempts to pass the exam. If you do not pass after three attempts,
                         you will need to restart from step one and pay 25% of the full course fee. <br /><br />Our driving school offers examination 
                         preparation classes and practice exams, 
                         which students are welcome to attend free of charge. These resources can help you succeed on your first attempt. <br /><br />
                         If you successfully pass the exam, you may apply for the trial period after a 90-day wait
                    </p>
                </div>}
                {examResponse && examResponse.result === 1 && payments && payments[0].paymentStatus === 'half' && <div id="examPass" className='col-lg-6 col-md-6 col-12'>
                    <h1>For You</h1>
                    <p>
                        "Congratulations {response.first_name} on passing your driving school examination!"<br /><br />
                        As a successful candidate, you are now eligible to participate in the trial period after a waiting period of 90 days from the date of your exam results.<br />
                        If you are under 18 years of age, you must wait until you turn 18 to attempt the trial. <br /><br />
                        Furthermore, you are required to attend practice sessions regularly and practice with your vehicle to prepare for the trial. Consistent attendance at practice sessions is 
                        essential for building the skills and confidence needed to succeed. If you do not attend practices regularly, you will not be permitted to attempt the trial. We encourage 
                        you to make the most of this opportunity and practice diligently.<br /><br />
                        Additionally, all exam pass students must pay the full course fee prior to the trial, as failure to do so will result in ineligibility to participate. <br /><br />
                        <span>If you wish to make the balance payment online, please <Link to='/payment' id='btn' style={{color:'darkblue'}}>Click here</Link> to proceed.</span><br /><br />
                    </p>
                </div>}
                {
                    payments && payments[0].paymentStatus === 'full' ? !trialDetails ?
                        (<div id="examPass" className='col-lg-6 col-md-6 col-12'>
                            <h1>For You</h1>
                            <p>
                                waiting for trial date  (write something long and meaning fully)
                            </p>
                        </div>) : 
                        (<div id="examPass" className='col-lg-6 col-md-6 col-12'>
                            <h1>For You</h1>
                            <p>
                                waiting for trial date {new Date(trialDetails.trial_date).toLocaleDateString()}  (write something long and meaning fully)
                            </p>
                        </div>) : null

                }
            </div>
        </div>
    </div>

  )
}

export default ContentDetails