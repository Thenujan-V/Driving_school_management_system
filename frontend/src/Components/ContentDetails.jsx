import React, { useEffect, useState } from 'react'
import { ContentDetailsStyle } from './Styles'
import{userDetails} from '../Services/userService'
import{retrieveId} from '../Services/getToken'


const ContentDetails = () => {
    const id = retrieveId()
    const [apiResponse, setApiResponse] = useState('')
    
    useEffect(() => {
        const fetchStudentData = async (id) => {
            try{
                const userData = userDetails(id)
                setApiResponse('success to retrivedata')
            }
            catch(error){
                console.log(error)
                setApiResponse('Faild to retrivedata')
            }
        
        }
        fetchStudentData(id)
    }, [id])
  return (
    <div id='contentPage'>
        <div className="container" id='content'>
            <div className="row">
                <div id="img" className='col-lg-6 col-md-6 col-12'></div>
                <div id="foryou" className='col-lg-6 col-md-6 col-12'>
                    <h1>For You</h1>
                    <p>
                        "Congratulations Thenujan! <br /> You are eligible to take the examination!" <br />
                        <span>Your exam date is scheduled for July 4th, 2024</span> <br /><br />
                        You are allowed up to three attempts to pass the exam. If you do not pass after three attempts,
                         you will need to restart from step one and pay 25% of the full course fee. <br /><br />Our driving school offers examination 
                         preparation classes and practice exams, 
                         which students are welcome to attend free of charge. These resources can help you succeed on your first attempt. <br /><br />
                         If you successfully pass the exam, you may apply for the trial period after a 90-day wait
                    </p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ContentDetails