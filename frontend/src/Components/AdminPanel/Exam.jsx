import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { examEligibleStudents } from '../../Services/paymentService'
import { Link } from 'react-router-dom'
import ExamDate from './ExamDate'

const Exam = () => {
    const [examEligible, setExamEligible] = useState([])

    useEffect(() => {
        const fetchStudents = async () => {
            try{
                const response = await examEligibleStudents()
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
    <div style={{display:'flex', minHeight:'90vh', backgroundColor:'var(--green)'}}>
        <AdminVerticalNav />
        <div className='container studentsDetailsShow' style={{flex:'1'}}>
            <h1 className='text-center mt-4'>Exam Eligible Students</h1>
            <div className="head w-75 " style={{display:'flex', fontSize:'26px', fontWeight:'bold', borderBottom:'4px solid black'}}>
                <p className='col-lg-1 col-md-1 col-1'>Id</p>
                <p className='col-lg-3 col-md-3 col-3'>Full Name</p>
                <p className='col-lg-3 col-md-3 col-3'>Email</p>
                <p className='col-lg-5 col-md-5 col-5 text-center'>Assign Date</p>
            </div>
            {
                examEligible && 
                examEligible.map((student) => (
                    <div className='row w-75 '>
                        <Link to={`/viewdetails/${student.sId}`} className='col-lg-1 col-md-1 col-1' style={{color:'darkBlue' , fontWeight:'bolder', fontSize:'18px'}}>{student.id}</Link>
                        <p className='col-lg-3 col-md-3 col-3'>{student.first_name} {student.last_name}</p>
                        <p className='col-lg-3 col-md-3 col-3'>{student.email}</p>
                        {/* <Link to={`/examDate/${student.id}`}  className='col-lg-3 col-md-3 col-3 view'>Assign Date</Link> */}
                        <div className='col-lg-5 col-md-5 col-5 d-flex justify-content-center'>
                            <ExamDate 
                                student_id = {student.id}
                            />
                        </div>
                    </div>
                ))
            }    
        </div>
    </div>
  )
}

export default Exam