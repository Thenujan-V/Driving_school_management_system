import React, { useEffect, useState } from 'react'
import { showStudents } from '../../Services/studentService'
import { showAllUsers } from '../../Services/userService'
import PieChart from './PieChart'
import { show_all_exam_students, show_exam_students } from '../../Services/examServices'

const Dashboard = () => {
    const [students, setStudents] = useState('')
    const [users, setUsers] = useState('')
    const [examDetails, setExamDetails] = useState('')

    useEffect(() => {
        const studentsDetails = async () => {
            try{
                const response = await showStudents()
                setStudents(response)
                const userRes = await showAllUsers() 
                setUsers(userRes)
                const examRes = await show_all_exam_students()
                setExamDetails(examRes)
            }
            catch(error){
                console.log('error :', error)
            }
        }
        studentsDetails()
    },[])

    const totalStudents = students && students.reduce((acc, student) => acc + 1 , 0)
    const totalUserAccounts = users && users.reduce((acc, user) => acc + 1 , 0)
    const nonstudents = totalUserAccounts - totalStudents

    const examStudentsCount = examDetails && examDetails.reduce((acc, student) => acc + 1 , 0)
    const examPassStudentsCount = examDetails && examDetails.reduce((acc, student) => student.result === 1 ? acc + 1 : acc , 0)
    const examFailStudentsCount = examStudentsCount - examPassStudentsCount
    // console.log('eeee :', examDetails)
    console.log('eeee :', examPassStudentsCount)
   
    const usageData = {
        labels: ['non-students', 'total-Students'],
        values: [nonstudents, totalStudents],
    }
    const examinatonData = {
        labels: ['exam-Fail-Students', 'exam-Pass-Students'],
        values: [examFailStudentsCount, examPassStudentsCount],
    }
  return (
    <div>
        <h1 className='text-center'>Admin Dashboard</h1>
        <div className="row">
            <div className='col-6'>
                <h3 className='text-center'>Usage History</h3>
                <PieChart data = {usageData}/>
            </div>
            <div className='col-6'>
                <h3 className='text-center'>Examination Success Rate</h3>
                <PieChart data = {examinatonData}/>
            </div>
        </div>
        
    </div>
  )
}

export default Dashboard