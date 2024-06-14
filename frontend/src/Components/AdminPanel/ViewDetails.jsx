import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { showStudents, student_details, student_details_update } from '../../Services/studentService'
import { Link, useParams } from 'react-router-dom'
import { showDetails } from '../../Services/paymentService'

const ViewDetails = () => {
    const sId = useParams()
    const id = sId.user_id
    const [studentsApi, setStudentsApi] = useState([])
    const [student, setStudent] = useState('')
    const [uid, setUid] = useState('')
    const [documents, setDocuments] = useState([])
    const [payments, setPayments] = useState([])


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

    },[sId])

    useEffect(() => {
        if (studentsApi && sId && sId.user_id) {
            const findStudent = studentsApi?.find((student) => student.sId === Number(id))
            setStudent(findStudent)
            findStudent && setUid(findStudent.id)
        }
    },[studentsApi, sId])

    useEffect(() => {
        const fetchStudents = async(uid) => {
            try{
                const response = await student_details(uid)
                setDocuments(response.data)
            }
            catch(error){
                console.log('error : ',error)
                setDocuments(error)
            }
        }
        fetchStudents(uid)

        const fetchPayments = async(uid) => {
            try{
                const response = await showDetails(uid)
                setPayments(response.data)
            }
            catch(error){
                console.log('error : ',error)
                setDocuments(error)
            }
        }
        fetchPayments(uid)
    }, [uid])

    const verifyStudentDetails = (id) => {
        try{
            console.log('okey')
            const data = {
                student_status :'verified'
            } 
            const response = student_details_update(data, id)
        }
        catch(error){
            console.log(error)
        }
    }
    console.log('response :', payments)
    
  return (
    <div style={{display:'flex', minHeight:'90vh', backgroundColor:'var(--green)'}}>
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
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>Date of joined</p>
                        <p className='col-lg-6 col-md-6 col-6 ans'>- {new Date(student.created_date).toLocaleDateString()}</p>
                    </div>
                    <div className="row detail">
                        <p className='col-lg-6 col-md-6 col-6 qes'>Student Status</p>
                        <p className='col-lg-6 col-md-6 col-6 ans status' >- <span>{student.student_status ? student.student_status :'not verified'}</span> </p>
                    </div>
                    <br /> 
                    {payments && payments.length > 0 &&
                        <>
                            <div className="row detail">
                                <p className='col-lg-6 col-md-6 col-6 qes'>Package Amount</p>
                                <p className='col-lg-6 col-md-6 col-6 ans'>- {payments[0].total_amount}</p>
                            </div>
                            <div className="row detail">
                                <p className='col-lg-6 col-md-6 col-6 qes'>Exam Amount</p>
                                <p className='col-lg-6 col-md-6 col-6 ans'>- {payments[0].paid ? `${payments[0].paid} LKR`: 'Not Paid'}</p>
                            </div>
                            <div className="row detail">
                                <p className='col-lg-6 col-md-6 col-6 qes'>Trail Amount</p>
                                <p className='col-lg-6 col-md-6 col-6 ans'>- {payments[0].balance_paid ? `${payments[0].balance_paid} LKR`: 'Not Paid'}</p>
                            </div>
                        </>
                    }
                    <br />
                    <br />
                    <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="form-group mb-3">
                      <p htmlFor="nic_soft_copy" className=" qes">NIC Soft Copy</p>
                    { documents && 
                      <iframe src={`http://localhost:4000/${documents.nic_soft_copy_url}`} title="NIC Soft Copy" width="100%" height="300"></iframe>
                    }
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-3">
                      <p htmlFor="medical_soft_copy" className=" qes">Medical Soft Copy</p>
                      { documents && 
                        <iframe src={`http://localhost:4000/${documents.medical_soft_copy_url}`} title="NIC Soft Copy" width="100%" height="300"></iframe>
                      }                    
                        </div>
                  </div>
                  <div className="col-md-12">
                        <div className="form-group mb-3">
                        <p htmlFor="birth_certificate_soft_copy" className=" qes">Birth Certificate Soft Copy</p>
                        { documents && 
                            <iframe src={`http://localhost:4000/${documents.birth_certificate_soft_copy_url}`} title="NIC Soft Copy" width="100%" height="300"></iframe>
                        }                        
                        </div>
                    </div>
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