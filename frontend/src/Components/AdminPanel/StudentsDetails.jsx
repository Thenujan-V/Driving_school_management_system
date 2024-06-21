import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { showStudents } from '../../Services/studentService'
import { Link } from 'react-router-dom'
// import {studentsDetails} from '../Styles'

const StudentsDetails = () => {
    const [studentsApi, setStudentsApi] = useState([])

    useEffect(() => {
        const fetchStudentsDetails = async () => {
            try{
                const response = await showStudents()
                setStudentsApi(response)
            }
            catch(error){
                console.log('error : ',error)
                setStudentsApi(error)
            }
        }
        fetchStudentsDetails()
    },[])
  return (
        <div className='container studentsDetailsShow' style={{ backgroundColor:'var(--green)' ,minHeight:'120vh'}}>
            <h1 className='text-center mt-4'>Student Details</h1>
            {
                studentsApi &&
                studentsApi.map((studentDetail) => (
                    studentDetail.active === 1 &&
                    <div className='row'>
                        <p className='col-lg-1 col-md-2 col-2'>{studentDetail.id}</p>
                        <p className='col-lg-2 col-md-2 col-2'>{studentDetail.nic_number}</p>
                        <p className='col-lg-2 col-md-2 col-2'>{studentDetail.first_name}</p>
                        <p className='col-lg-2 col-md-2 col-2'>{studentDetail.phone_number}</p>
                        <Link to={`/viewdetails/${studentDetail.sId}`} className='col-lg-2 col-md-2 col-2 view'>View</Link>
                        {
                            studentDetail.student_status === null ? 
                            <Link className='col-lg-3 col-md-2 col-2 notVerify'>Not Verify</Link>:
                            <Link className='col-lg-2 col-md-2 col-2 verify'>Verified</Link> 
                        }
                    </div>
                ))
            }
        </div>
  )
}

export default StudentsDetails