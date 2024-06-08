import React, { useEffect, useState } from 'react'
import { showStudents } from '../../Services/studentService'
import { Link } from 'react-router-dom'
import EmployeeVerticalNav from './EmployeeVerticalNav'

const ViewStudents = () => {
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
    <div style={{display:'flex', minHeight:'90vh', backgroundColor:'var(--green)'}}>
        <EmployeeVerticalNav />
        <div className='container studentsDetailsShow' style={{flex:1}}>
            <h1 className='text-center mt-4'>Student Details</h1>
            {
                studentsApi &&
                studentsApi.map((studentDetail) => (
                    <div className='row'>
                        <p className='col-lg-1 col-md-2 col-2'>{studentDetail.id}</p>
                        <p className='col-lg-2 col-md-2 col-2'>{studentDetail.nic_number}</p>
                        <p className='col-lg-2 col-md-2 col-2'>{studentDetail.first_name}</p>
                        <p className='col-lg-2 col-md-2 col-2'>{studentDetail.phone_number}</p>
                        <Link to={`/attendance/${studentDetail.id}/${studentDetail.first_name}`} className='col-lg-2 col-md-2 col-2 view'>View</Link>
                        <Link to={`/assignDate/${studentDetail.id}`} className='col-lg-3 col-md-2 col-2 verify'>Assign Time</Link>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default ViewStudents