import React, { useEffect, useState } from 'react'
import { show_exam_students, update_result } from '../../Services/examServices'
import AdminVerticalNav from './AdminVerticalNav'
import { Link } from 'react-router-dom'

const Result = () => {

    const [showDetails, setShowDetails] = useState([])
    const [showExam, setShowExam] = useState('')
    const [showTrial, setShowTrial] = useState('')

    useEffect(() => {
        const studentsDetails = async () => {
            try{
                const response = await show_exam_students()
                setShowDetails(response)
            }
            catch(error){
                setShowDetails(error)
            }
        }
        studentsDetails()
    },[])

    const resultPass = async (id) =>{
        
        try{
            const examResult = {
                result :'1',
                sId :id
            }
            const response = await update_result(examResult)
            console.log(response.data)
        }
        catch(error){
            console.log('error :',error)
        }
    }
    const resultFail = async (id) =>{
        
        try{
            const examResult = {
                result :'0',
                sId :id
            }
            const response = await update_result(examResult)
            console.log(response.data)
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

  return (
    <div style={{display:'flex', minHeight:'90vh'}}>
        <AdminVerticalNav />
        <div className='container studentsDetailsShow' style={{flex:'1'}}>
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
                            <Link className='btn col-lg-3 col-md-2 col-2 notVerify' onClick={() => resultPass(studentDetail.id)}>Pass</Link>
                            <Link className='btn col-lg-2 col-md-2 col-2 verify' onClick={() => resultFail(studentDetail.id)}>Fail</Link> 
                        </div>
                    ))
                :null
            }
            {
                showTrial ? 
                    showDetails &&
                        showDetails.map((studentDetail) => (
                            <div className='row'>
                                <p className='col-lg-1 col-md-2 col-2'>{studentDetail.id}</p>
                                <p className='col-lg-2 col-md-2 col-2'>{studentDetail.first_name} {studentDetail.last_name}</p>
                                <p className='col-lg-2 col-md-2 col-2'>{new Date(studentDetail.exam_date).toLocaleDateString()}</p>
                                <Link className='btn col-lg-3 col-md-2 col-2 notVerify' onClick={() => resultPass(studentDetail.id)}>Pass</Link>
                                <Link className='btn col-lg-2 col-md-2 col-2 verify' onClick={() => resultFail(studentDetail.id)}>Fail</Link> 
                            </div>
                        ))
                    :null
                
            }
        </div>
    </div>
  )
}

export default Result