import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import VerticalNavbar from './VerticalNavbar'
import { Link, useNavigate } from 'react-router-dom';
import { retrieveId } from '../Services/getToken';
import { userDetails } from '../Services/userService';
import { show_exam_details } from '../Services/examServices';
import { show_trial_details } from '../Services/TrialServices';

const Results = () => {
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

    const [response, setResponse] = useState('')
    const [examResponse, setExamResponse] = useState('')
    const [trialResponse, setTrialResponse] = useState('')
    const [apiResponse, setApiResponse] = useState('')
    
    useEffect(() => {
        const fetchStudentData = async (user_id) => {
            try{
                const userData = await userDetails(user_id)
                setResponse(userData)
                setApiResponse('success to retrivedata')
            }
            catch(error){
                setApiResponse('Faild to retrivedata')
            }
        
        }

        const fetchExamDetails = async (user_id) => {
            try{
                const userExamData = await show_exam_details(user_id)
                setExamResponse(userExamData.data)
                setApiResponse('success to retrivedata')
            }
            catch(error){
                setApiResponse('Faild to retrivedata')
            }
        }

        const fetchTrialDetails = async (user_id) => {
            try{
                const userTrialData = await show_trial_details(user_id)
                setTrialResponse(userTrialData.data)
            }
            catch(error){
                console.log('error :', error)
            }
        }

        fetchStudentData(user_id)
        fetchExamDetails(user_id)
        fetchTrialDetails(user_id)

    }, [user_id])
console.log('rrr :', trialResponse)
    return (
    <div>
        <Navbar />
        <div style={{display:'flex', minHeight:'100vh'}}>
            <VerticalNavbar />
            <div style={{flex:'1', minHeight:'100vh'}} className='results'>
                <h1>Your Result</h1>
                <div className="boxes">
                    { examResponse && 
                        examResponse.map((res) => (
                            <div className="exam col-lg-6">
                                <h2>Written Exam Result</h2>
                                {res.result === 1 ?
                                    <div id="examPass">
                                        <p className='text-center'>Attempt - {res.attempt}</p>
                                        <p>Congrats...! You Passed the examination</p>
                                    </div>: res.result === 0 ? 
                                            (<div id="examFail">
                                                <p className='text-center'>Attempt - {res.attempt}</p>
                                                <p>Sorry you faild the examination.</p>
                                            </div> ) : <p>Wait</p>
                                }
                            </div>
                        ))
                        
                    }
                    {(trialResponse.length > 0) && trialResponse && 
                        trialResponse.map((trialResponse) => (
                            <div className="trial col-lg-6">
                                <h2>Driving Exam Result</h2>
                                {trialResponse.result === 1 ? 
                                (<div id="trialPass">
                                    <p className='text-center'>Attempt - {trialResponse.attempt}</p>
                                    <p className='mt-2 text-center'>Congrats...! You Passed the trial examination.</p>
                                    <p className='p-3 text-center' style={{color:'#071952', fontWeight:'bold'}}>We'd love to hear your feedback! Please take a moment to leave us a review: <br /><Link to={`/review/${user_id}`} style={{color:'#F2F7A1', fontWeight:'bold'}}>Review Here</Link>. Thank you!</p>
                                </div>) : trialResponse.result === 0 ?
                                (<div id="trailFail">
                                    <p className='text-center'>Attempt - {trialResponse.attempt}</p>
                                    <p>Sorry you faild the trial examination.</p>
                                </div>) : ''}
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default Results