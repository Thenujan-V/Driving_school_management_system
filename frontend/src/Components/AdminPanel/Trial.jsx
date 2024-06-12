import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { examEligibleStudents, trialEligibleStudents } from '../../Services/paymentService'
import { Link } from 'react-router-dom'
import ExamDate from './ExamDate'
import TrialDate from './TrialDate'

const Trial = () => {
    const [examEligible, setExamEligible] = useState([])

    useEffect(() => {
        const fetchStudents = async () => {
            try{
                const response = await trialEligibleStudents()
                setExamEligible(response)
            }
            catch(error){
                setExamEligible(error)
            }
        }
        fetchStudents()
    },[])
    console.log('resss : ',examEligible)
  return (
    <div>
        <div style={{display:'flex', minHeight:'90vh', backgroundColor:'var(--green)'}}>
        <AdminVerticalNav />
        <div className='container studentsDetailsShow' style={{flex:'1'}}>
            <h1 className='text-center mt-4'>Trial Eligible Students</h1>
            <div className="head w-75 " style={{display:'flex', fontSize:'26px', fontWeight:'bold', borderBottom:'4px solid black'}}>
                <p className='col-lg-1 col-md-1 col-1'>Id</p>
                <p className='col-lg-3 col-md-3 col-3'>Full Name</p>
                <p className='col-lg-3 col-md-3 col-3'>Email</p>
                <p className='col-lg-5 col-md-5 col-5 text-center'>Assign Date</p>
            </div>
            {
                examEligible && examEligible.length > 0 ? (
                    examEligible.filter(student => student.paymentStatus === 'full').length > 0 ? (
                        examEligible.map((student) => (
                            student.active === 1 &&
                            student.paymentStatus === 'full' && (
                                <div className='row w-75' key={student.id}>
                                    <Link to={`/viewdetails/${student.sId}`} className='col-lg-1 col-md-1 col-1' style={{color:'darkBlue' , fontWeight:'bolder', fontSize:'18px'}}>{student.id}</Link>
                                    <p className='col-lg-3 col-md-3 col-3'>{student.first_name} {student.last_name}</p>
                                    <p className='col-lg-3 col-md-3 col-3'>{student.email}</p>
                                    <div className='col-lg-5 col-md-5 col-5 d-flex justify-content-center'>
                                        <TrialDate student_id={student.id} />
                                    </div>
                                </div>
                            )
                        ))
                    ) : (
                        <p>No one eligible for trial</p>
                    )
                ) : (
                    <p>No data available</p>
                )
            }

        </div>
    </div>
    </div>
  )
}

export default Trial