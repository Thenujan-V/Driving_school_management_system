import React, { useEffect, useState } from 'react'
import { show_exam_students, update_result } from '../../Services/examServices'
import AdminVerticalNav from './AdminVerticalNav'
import { Link } from 'react-router-dom'
import { show_trial_details, show_trial_students, update_trial_result } from '../../Services/TrialServices'

const Result = () => {

    const [showDetails, setShowDetails] = useState([])
    const [showTrialDetails, setShowTrialDetails] = useState([])
    const [showExam, setShowExam] = useState('')
    const [showTrial, setShowTrial] = useState('')

    useEffect(() => {
        const studentsDetails = async () => {
            try{
                const response = await show_exam_students()
                setShowDetails(response)

                const trialResponse = await show_trial_students()
                setShowTrialDetails(trialResponse)
            }
            catch(error){
                setShowDetails(error)
            }
        }
        studentsDetails()
    },[])

    const examResult = async (id, result) =>{
        
        try{
            const examResult = {
                result :result,
                sId :id
            }
            await update_result(examResult)

            const trialResponse = await show_trial_students()
            setShowTrialDetails(trialResponse)
        }
        catch(error){
            console.log('error :',error)
        }
    }
    const trialResult = async (id, result) =>{
        
        try{
            const examResult = {
                result :result,
                sId :id
            }
            await update_trial_result(examResult)

            const trialResponse = await show_trial_students()
            setShowTrialDetails(trialResponse)
        }
        catch(error){
            console.log('error :',error)
        }
    }

    const examResultShow = () => {
        setShowTrial(null)
        setShowExam('1')
    }
    const TrialResultShow = () => {
        setShowExam(null)
        setShowTrial('1')
    }
    console.log('sssss :', showTrialDetails)

  return (
        <div className='container studentsDetailsShow' style={{flex:1}}>
            <h1 className='text-center mt-4'>Results</h1>
            <div className="row">
                <div className="col-4 addExamination" onClick={examResultShow}>Add Examination Results</div>
                <div className="col-4 addTrailq" onClick={TrialResultShow}>Add trail Results</div>
            </div>
            {
                showExam ? 
                    showDetails &&
                    showDetails.map((studentDetail) => (
                        <div className='row'>
                            <p className='col-lg-1 col-md-2 col-2'>{studentDetail.id}</p>
                            <p className='col-lg-2 col-md-2 col-2'>{studentDetail.first_name} {studentDetail.last_name}</p>
                            <p className='col-lg-2 col-md-2 col-2'>{new Date(studentDetail.exam_date).toLocaleDateString()}</p>
                            <Link className='btn col-lg-3 col-md-2 col-2 notVerify' onClick={() => examResult(studentDetail.id, '1')}>Pass</Link>
                            <Link className='btn col-lg-2 col-md-2 col-2 verify' onClick={() => examResult(studentDetail.id, '0')}>Fail</Link> 
                        </div>
                    ))
                :null
            }
            {
                showTrial ? 
                    showTrialDetails &&
                    showTrialDetails.map((studentDetail) => (
                            <div className='row'>
                                <Link to={`/viewdetails/${studentDetail.sId}`} className='col-lg-1 col-md-1 col-1' style={{color:'darkBlue' , fontWeight:'bolder', fontSize:'18px'}}>{studentDetail.id}</Link>
                                <p className='col-lg-2 col-md-2 col-2'>{studentDetail.first_name} {studentDetail.last_name}</p>
                                <p className='col-lg-2 col-md-2 col-2'>{new Date(studentDetail.trial_date).toLocaleDateString()}</p>
                                <Link className='btn col-lg-3 col-md-2 col-2 notVerify' onClick={() => trialResult(studentDetail.id, '1')}>Pass</Link>
                                <Link className='btn col-lg-2 col-md-2 col-2 verify' onClick={() => trialResult(studentDetail.id, '0')}>Fail</Link> 
                            </div>
                        ))
                    :null
                
            }
        </div>
  )
}

export default Result