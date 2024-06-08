import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faIdCard, faStarHalfStroke, faUserAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faUser, faClock } from '@fortawesome/free-regular-svg-icons';
import { logout, retrieveId } from '../../Services/getToken';


const AdminVerticalNav = () => {

    const navigate = useNavigate()
    const decodedToken = retrieveId()

    const [user_id, setUser_id] = useState('')

    useEffect(() => {
        if(decodedToken){
            setUser_id(decodedToken.id)
    
            if(decodedToken.role === 'user' || decodedToken.role === 'instructor'){
                navigate('/signin')
            }
        }
        else{
            setUser_id('')
            navigate('/signin')
        }
    },[decodedToken])

    const handleLogout = () => {
        logout()
    }

  return (
    <>
        <div className="vertical-menu" style={{minHeight:'100vh'}}>
            <h2 className='mb-2'>DashBoard</h2>
            <div className="links">
                <Link to='/adminpanel' className='link'>
                    <FontAwesomeIcon icon={faClock} /> Profile
                </Link>
                <Link to='/studentsdetails' className='link'>
                    <FontAwesomeIcon icon={faIdCard} /> View Student
                </Link>
                <Link to='/userdetails' className='link'>
                    <FontAwesomeIcon icon={faUser} /> View Users 
                </Link>
                <Link to='/exam' className='link'>
                    <FontAwesomeIcon icon={faCalendarDays} /> Add Exam Date
                </Link>
                <Link to='/trial' className='link'>
                    <FontAwesomeIcon icon={faCalendarDays} /> Add Trial Date
                </Link>
                <Link to='/result' className='link'>
                    <FontAwesomeIcon icon={faSquarePollHorizontal} /> Add Results
                </Link>
                <Link to='/reviewcheck' className='link'>
                    <FontAwesomeIcon icon={faStarHalfStroke} /> Reviews
                </Link>
                <Link to='/addemployee' className='link'>
                    <FontAwesomeIcon icon={faUserPlus} /> Add Employee
                </Link>
                <Link to='/adminDetails' className='link'>
                    <FontAwesomeIcon icon={faClock} /> Admin
                </Link>
                <Link to='/instractor' className='link'>
                    <FontAwesomeIcon icon={faClock} /> Instructor
                </Link>
                <Link onClick={handleLogout} className='link'>
                    <FontAwesomeIcon icon={faClock} /> Logout
                </Link>
            </div>
        </div>
    </>
  )
}

export default AdminVerticalNav