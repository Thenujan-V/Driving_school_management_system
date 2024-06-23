import React, { useEffect, useState } from 'react'
import { showStudents } from '../../Services/studentService'
import { showAllUsers } from '../../Services/userService'
import PieChart from './PieChart'
import { show_all_exam_students, show_exam_students } from '../../Services/examServices'
import { show_all_trial_details } from '../../Services/TrialServices'
import BarChart from './BarChart'

const Dashboard = () => {
    const [students, setStudents] = useState('')
    const [users, setUsers] = useState('')
    const [examDetails, setExamDetails] = useState('')
    const [trialDetails, setTrialDetails] = useState('')

    useEffect(() => {
        const studentsDetails = async () => {
            try{
                const response = await showStudents()
                setStudents(response)
                const userRes = await showAllUsers() 
                setUsers(userRes)
                const examRes = await show_all_exam_students()
                setExamDetails(examRes)
                const trialRes = await show_all_trial_details()
                setTrialDetails(trialRes.data)
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
    const usageData = {
        labels: ['non-students', 'total-Students'],
        values: [nonstudents, totalStudents],
    }

    const examStudentsCount = examDetails && examDetails.reduce((acc, student) => acc + 1 , 0)
    const examPassStudentsCount = examDetails && examDetails.reduce((acc, student) => student.result === 1 ? acc + 1 : acc , 0)
    const examFailStudentsCount = examStudentsCount - examPassStudentsCount
    const examinatonData = {
        labels: ['exam-Fail-Students', 'exam-Pass-Students'],
        values: [examFailStudentsCount, examPassStudentsCount],
    }

    const trialStudentsCount = trialDetails && trialDetails.reduce((acc, student) => acc + 1 , 0)
    const trialPassStudentsCount = trialDetails && trialDetails.reduce((acc, student) => student.result === 1 ? acc + 1 : acc , 0)
    const trialFailStudentsCount = trialStudentsCount - trialPassStudentsCount
    const trialData = {
        labels: ['trial-Fail-Students', 'trial-Pass-Students'],
        values: [trialFailStudentsCount, trialPassStudentsCount],
    }

    const getMonthFromDate = (created_date) => {
        const date = new Date(created_date)
        return date.getMonth()
    }

    const entrollmentsPerMonth = (students) =>{
        const counts = Array(12).fill(0)
        students && students.forEach((student) => {
            const month = getMonthFromDate(student.created_date)
            counts[month]++
        })
        return counts
    }
    const entrollmentsCounts = entrollmentsPerMonth(students)

    const entrollmentsData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        values: entrollmentsCounts
    }

    console.log('eeee :', entrollmentsCounts)
    // console.log('eeee :', trialPassStudentsCount)
   
    
    

    
  return (
    <div className='container-fluid'>
        <h1 className='text-center'>Admin Dashboard</h1>
        <div className="row">
            <div className='col-6' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <h3 className='text-center'>Usage History</h3>
                <PieChart data = {usageData}/>
            </div>
            <div className='col-6' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <h3 className='text-center'>Examination Success Rate</h3>
                <PieChart data = {examinatonData}/>
            </div>
            <div className='col-6' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <h3 className='text-center'>Trial Success Rate</h3>
                <PieChart data = {trialData}/>
            </div>
            <div className="col-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding:'0 10vw 10vw 10vw' }}>
                <h3 className="text-center">Student Enrollments per Month</h3>
                <BarChart data={entrollmentsData} />
            </div>
        </div>
        
    </div>
  )
}

export default Dashboard