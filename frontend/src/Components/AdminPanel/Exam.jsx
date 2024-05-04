import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { examEligibleStudents } from '../../Services/paymentService'
import { Link } from 'react-router-dom'

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
    <div style={{display:'flex', minHeight:'90vh'}}>
        <AdminVerticalNav />
        <div className='container studentsDetailsShow' style={{flex:'1'}}>
            <h1 className='text-center mt-4'>Exam Eligible Students</h1>
            <div className="head w-75" style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:'26px', fontWeight:'bold', borderBottom:'4px solid black'}}>
                <p className='col-lg-3 col-md-3 col-3'>Student Id</p>
                <p className='col-lg-3 col-md-3 col-3'>Full Name</p>
                <p className='col-lg-3 col-md-3 col-3'>Email</p>
                <p className='col-lg-3 col-md-3 col-3'>Date</p>
            </div>
            {
                examEligible && 
                examEligible.map((student) => (
                    <div className='row w-75'>
                        <p className='col-lg-3 col-md-3 col-3'>{student.sId}</p>
                        <p className='col-lg-3 col-md-3 col-3'>{student.first_name} {student.last_name}</p>
                        <p className='col-lg-3 col-md-3 col-3'>{student.email}</p>
                        <Link to={`/examDate/${student.id}`}  className='col-lg-3 col-md-3 col-3 view'>Assign Date</Link>
                    </div>
                ))
            }    
        </div>
    </div>
  )
}

export default Exam