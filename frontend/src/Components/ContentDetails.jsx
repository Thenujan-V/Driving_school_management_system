import React, { useEffect, useState } from 'react'
import { ContentDetailsStyle } from './Styles'
import{userDetails} from '../Services/userService'
import{retrieveId} from '../Services/getToken'
import{show_exam_details} from '../Services/examServices'


const ContentDetails = () => {
    const id = retrieveId()
    const [response, setResponse] = useState('')
    const [examResponse, setExamResponse] = useState('')
    const [apiResponse, setApiResponse] = useState('')
    
    useEffect(() => {
        const fetchStudentData = async (id) => {
            try{
                const userData = await userDetails(id)
                setResponse(userData)
                setApiResponse('success to retrivedata')
            }
            catch(error){
                console.log(error)
                setApiResponse('Faild to retrivedata')
            }
        
        }

        const fetchExamDetails = async (id) => {
            try{
                const userExamData = await show_exam_details(id)
                setExamResponse(userExamData)
                setApiResponse('success to retrivedata')
            }
            catch(error){
                console.log(error)
                setApiResponse('Faild to retrivedata')
            }
        }
        fetchStudentData(id)
        fetchExamDetails(id)


    }, [id])

    const examResult = examResponse.result; 

    const examElement = document.getElementById('foryou');
    const examPassElement = document.getElementById('examPass');

    function toggleExamDetails(result) {
        if (result === 1) {
            examPassElement.style.display = 'block';
            examElement.style.display = 'none';
        } 
        else if (result === 0) {
            examElement.style.display = 'block';
            examPassElement.style.display = 'none';
        }
    }
    toggleExamDetails(examResult)

  return (
    <div id='contentPage'>
        <div className="container" id='content'>
            <div className="row">
                <div id="img" className='col-lg-6 col-md-6 col-12'></div>
                <div id="foryou" className='col-lg-6 col-md-6 col-12'>
                    <h1>For You</h1>
                    <p>
                        "Hello {response.first_name} <br /> You are eligible to take the examination!" <br />
                        <span>Your exam date is scheduled for July 4th, 2024</span> <br /><br />
                        You are allowed up to three attempts to pass the exam. If you do not pass after three attempts,
                         you will need to restart from step one and pay 25% of the full course fee. <br /><br />Our driving school offers examination 
                         preparation classes and practice exams, 
                         which students are welcome to attend free of charge. These resources can help you succeed on your first attempt. <br /><br />
                         If you successfully pass the exam, you may apply for the trial period after a 90-day wait
                    </p>
                </div>
                <div id="examPass" className='col-lg-6 col-md-6 col-12'>
                    <h1>For You</h1>
                    <p>
                        "Congratulations {response.first_name} on passing your driving school examination!"<br /><br />
                        As a successful candidate, you are now eligible to participate in the trial period after a waiting period of 90 days from the date of your exam results.<br />
                        If you are under 18 years of age, you must wait until you turn 18 to attempt the trial. <br /><br />
                        Furthermore, you are required to attend practice sessions regularly and practice with your vehicle to prepare for the trial. Consistent attendance at practice sessions is 
                        essential for building the skills and confidence needed to succeed. If you do not attend practices regularly, you will not be permitted to attempt the trial. We encourage 
                        you to make the most of this opportunity and practice diligently.<br /><br />
                        Additionally, all exam pass students must pay the full course fee prior to the trial, as failure to do so will result in ineligibility to participate. <br /><br />
                    </p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ContentDetails