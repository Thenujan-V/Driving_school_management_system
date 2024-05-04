import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { showStudents, student_details_update } from '../../Services/studentService'
import { Link, useParams } from 'react-router-dom'

const ViewDetails = () => {
    const sId = useParams()
    const id = sId.user_id
    const [studentsApi, setStudentsApi] = useState([])
    const [student, setStudent] = useState('')

    useEffect(() => {
        const fetchStudentsDetails = async () => {
            try{
                const response = await showStudents()
                console.log('response : ',response)
                setStudentsApi(response)
            }
            catch(error){
                console.log('error : ',error)
                setStudentsApi(error)
            }
        }
        fetchStudentsDetails()
    },[])

console.log('students :',studentsApi)
    useEffect(() => {
        if (studentsApi && sId && sId.user_id) {

        const findStudent = studentsApi?.find((student) => student.sId === Number(id))
        setStudent(findStudent)
        }

    },[studentsApi, sId])
   
    const verifyStudentDetails = (id) => {
        try{
            console.log('okey')
            const data = {
                student_status :'verified'
            } 
            const response = student_details_update(data, id)
            console.log(response.data)
        }
        catch(error){
            console.log(error)
        }
    }
    
  return (
    <div style={{display:'flex', minHeight:'90vh'}}>
        <AdminVerticalNav />
        <div className='container showDetails' style={{flex:'1'}}>
            {
                student && 
                <div className="studentDetail">
                    <h1 className='mb-5'>Student details - [{student.sId}]</h1>

                    <div className="details">
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>First Name</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {student.first_name}</p>
                    </div>
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>Last Name</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {student.last_name}</p>
                    </div>
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>Email Address</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {student.email}</p>
                    </div>
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>NIC number</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {student.nic_number}</p>
                    </div>
                    {/* <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>nic soft copy</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>{student.nic_soft_copy}</p>
                    </div> */}
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>phone number</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {student.phone_number}</p>
                    </div>
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>Vechile Class</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {student.vechile_class}</p>
                    </div>
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>Date of birth</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {student.birth_date}</p>
                    </div>
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>medical date</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {student.medical_date}</p>
                    </div>
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>medical number</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {student.medical_number}</p>
                    </div>
                    {/* <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>medical soft copy</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>{student.medical_soft_copy}</p>
                    </div> */}
                    
                    {/* <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>birth_certificate_soft_copy</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>{student.birth_certificate_soft_copy}</p>
                    </div> */}
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>payment</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {student.payment}</p>
                    </div>
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>Date of joined</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {student.created_date}</p>
                    </div>
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>Student Status</p>
                        <p className='col-lg-6 col-md-6 col-6 ans status' >- <span>{student.student_status ? student.student_status :'not verified'}</span> </p>
                    </div>
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>active status</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {student.active_status}</p>
                    </div>  
                </div>
                <Link onClick={verifyStudentDetails(student.id)} className='btn verify'>{student.student_status? 'Verified' : 'Verify Now'}</Link>
                <Link className='btn msg'>Message</Link>
                
                </div>
            }
        </div>
    </div>
  )
}

export default ViewDetails