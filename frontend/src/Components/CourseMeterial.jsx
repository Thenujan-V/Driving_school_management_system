import React, { useEffect, useState } from 'react'
import { CourseMeterialStyle, timeStyle } from './Styles'
import { sefty,free, time } from './Assets';
import { Link, useNavigate } from 'react-router-dom'
import{retrieveId} from '../Services/getToken'
import{show_exam_details} from '../Services/examServices'
import{get_times} from '../Services/practiceService'


const CourseMeterial = () => {
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

    const [examResponse, setExamResponse] = useState('')
    const [timeResponse, setTimeResponse] = useState('')
    const [apiResponse, setApiResponse] = useState('')

  useEffect(() => {
    const fetchExamDetails = async (user_id) => {
        try{
            const userExamData = await show_exam_details(user_id)
            setExamResponse(userExamData)
            setApiResponse('success to retrivedata')
        }
        catch(error){
            console.log(error)
            setApiResponse('Faild to retrivedata')
        }
    }

    const fetchPracticeTime = async (user_id) => {
      try{
        const practiceTime = await get_times(user_id)
        setTimeResponse(practiceTime)
        setApiResponse('success to retrivedata')
      }
      catch(error){
          console.log(error)
          setApiResponse('Faild to retrivedata')
      }
    }

    fetchExamDetails(user_id)
    fetchPracticeTime(user_id)

}, [user_id])

const examElement = document.getElementById('online-services');
const trialElement = document.getElementById('time-table');
// console.log("errrr",examResponse)
  useEffect(() => {
    if(examResponse){
      const examResult = examResponse.result; 
      toggleExamDetails(examResult)
    }
    else{
      if(trialElement){
        trialElement.style.display = 'none';
      }
    }
  },[])
    
    function toggleExamDetails(result) {
        if (result === 0) {
          examElement.style.display = 'block';
          trialElement.style.display = 'none';
        } 
        else if (result === 1) {
          trialElement.style.display = 'block';
          examElement.style.display = 'none';
        }
    }
console.log('exam :', examResponse)
  return (
        <div id="exam">
          {(typeof examResponse === 'undefined' || examResponse.result === 0 || examResponse.result === null) &&
            <div id="online-services">
              <h1>Exam Meterials</h1> 
              <p className='text-center pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ducimus, nihil quos officiis minus reiciendis sed temporibus quisquam necessitatibus unde eum omnis? Temporibus, commodi maxime. Eveniet, corrupti? Accusamus, excepturi eveniet?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias, itaque nisi nulla tenetur autem commodi fuga ullam accusantium dolore illum nam libero. Amet dolor excepturi ratione? Libero, maiores inventore.
              </p>
              <div className="container">
                  <div className="row" id='services'>
                      <Link to = '' className="col-lg-4 col-md-6 col-sm-6 col-12 text-center  p-5" id='service'>
                          <img src={sefty} alt="" className='img-fluid col-lg-4 col-md-6 col-sm-6 col-12'/>
                          <h3>Road Signs</h3>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur assumenda in, corrupti porro totam nihil facilis dolor officia ipsam quia!</p>
                          <img src={free} alt="" id='freeImg' className='img-fluid'/>
                      </Link>
                      <Link to = '' className="col-lg-4 col-md-6 col-sm-6 col-12 text-center p-5" id='service'>
                          <img src={sefty} alt="" className='img-fluid col-lg-4 col-md-6 col-sm-6 col-12'/>
                          <h3>Past Papers</h3>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur assumenda in, corrupti porro totam nihil facilis dolor officia ipsam quia!</p>
                          <img src={free} alt="" id='freeImg' className='img-fluid'/>
                      </Link>
                      <Link to = '' className="col-lg-4 col-md-6 col-sm-6 col-12 text-center p-5" id='service'>
                          <img src={sefty} alt="" className=' img-fluid col-lg-4 col-md-6 col-sm-6 col-12'/>
                          <h3>Additional Meterials</h3>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur assumenda in, corrupti porro totam nihil facilis dolor officia ipsam quia!</p>
                          <img src={free} alt="" id='freeImg' className='img-fluid'/>
                      </Link>
                  </div>
              </div>
          </div>}
                
          {examResponse && examResponse.result === 1 &&
            <div id="time-table" className='container'>
            <h1>Your Practice Time</h1>
            <div className="row" id='headings'>
              <div className="col-lg-4 col-md-4 col-6">Date</div>
              <div className="col-lg-4 col-md-4 col-6">Time</div>
              <div className="col-lg-4 col-md-4 col-6">Attendance</div>
            </div>
            {
              timeResponse && Array.isArray(timeResponse) ? (
                timeResponse.map((time, index) => (
                  <div key={index} id='times' className='row'>

                    <p id='date' className='col-lg-4 col-md-4 col-6'>{new Date(time.practice_date).toLocaleDateString('en-GB', {
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric'
                    })}</p>
                    <p id='time' className='col-lg-4 col-md-4 col-6'>{time.practice_time}</p>
                    <p id='atendance' className='col-lg-4 col-md-4 col-6'>{time.atendance === 0 ? "didn't come" : 'come'
                    }</p>
                  </div>
                ))
              ) : (
                <p>No Time assign yet</p>
              )
            }

          </div>}
          
        </div>
  )
}

export default CourseMeterial