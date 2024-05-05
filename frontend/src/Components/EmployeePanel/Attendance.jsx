import React, { useEffect, useState } from 'react'
import { get_times, updateAttendance } from '../../Services/practiceService'
import { Link, useParams } from 'react-router-dom'
import EmployeeVerticalNav from './EmployeeVerticalNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircle } from '@fortawesome/free-regular-svg-icons'

const Attendance = () => {
    const url = useParams()

    const [apiDate, setApiDate] = useState([])
    const [sid, setSid] = useState('')
    const [name, setName] = useState('')
    const [circle, setCircle] = useState([])
    const [attendance, setAttendance] = useState('')
 
    useEffect(() => {
        setSid(url.sId)
        setName(url.first_name)
        const fetchDates = async () => {
            try{
                const response = await get_times(sid, name)
                setApiDate(response)
            }
            catch(error){
                setApiDate([])
            }
        }
        fetchDates(sid, name)
    },[sid,name])
    console.log('response : ',apiDate)

    function formatDateString(inputDate) {
        const date = new Date(inputDate);
    
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
    
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"];
    
        const monthName = monthNames[month];
    
        function getOrdinalSuffix(day) {
            if (day > 3 && day < 21) return 'th';
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        }
    
        const ordinalSuffix = getOrdinalSuffix(day);
    
        return `${day}${ordinalSuffix} ${monthName} ${year}`;
    }

    const changeCircle = async (tId) => {
        setCircle(tId)
        try{
            const response = await updateAttendance(tId) 
            setAttendance(response)
        }
        catch(error){
            console.log('error :',error)
            setAttendance(null)
        }
    }
    console.log('cri :',circle)

  return (
    <div style={{display:'flex', minHeight:'90vh', backgroundColor:'var(--green)'}}>
        <EmployeeVerticalNav />
        <div className='container studentsDetailsShow' style={{flex:1}}>
            <h1 className='text-center mt-4'>Attendance</h1>
            {
                apiDate && 
                <div className="showDates">
                    <div className="details">
                        <p>STUDENT ID - {sid}</p>
                        <p>STUDENT NAME - {name}</p>
                    </div>
                    <div className="head row text-center">
                        <h2 className='col-lg-4 col-md-4 col-4'>Date</h2>
                        <h2 className='col-lg-4 col-md-4 col-4'>Time</h2>
                        <h2 className='col-lg-4 col-md-4 col-4'>Mark Attendance</h2>
                    </div>
                    <div className="dates">
                        {
                            apiDate.map((date) => (
                                <div className='row'>
                                    <p className='col-lg-4 col-md-4 col-4'>{formatDateString(new Date(date.practice_date).toLocaleDateString())}</p>
                                    <p className='col-lg-4 col-md-4 col-4'>{date.practice_time}</p>
                                     <Link className='col-lg-4 col-md-4 col-4 verify'>
                                        {
                                            !(circle === date.tId) ?
                                            <FontAwesomeIcon icon={faCircle} size='2xl' onClick={() => changeCircle(date.tId)}/>:
                                            <FontAwesomeIcon icon={faCircleCheck} size='2xl'/>
                                        }
                                     </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            }
            
        </div>
    </div>
  )
}

export default Attendance