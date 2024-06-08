import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { logout, retrieveId } from '../../Services/getToken';


const EmployeeVerticalNav = () => {

    const navigate = useNavigate()
    const decodedToken = retrieveId()
    const [user_id, setUser_id] = useState('')

    useEffect(() => {
        if(decodedToken){
            setUser_id(decodedToken.id)
    
            if(decodedToken.role === 'admin' || decodedToken.role === 'user'){
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
    <div className="vertical-menu" style={{minHeight:'100vh'}}>
            <h2>DashBoard</h2>
            <div className="links">
                <Link to='/instracterpanel' className='link'>
                    <FontAwesomeIcon icon={faClock} /> Profile
                </Link>
                <br />
                <Link to='/viewStudents' className='link'>
                    <FontAwesomeIcon icon={faIdCard} /> View Student
                </Link> 
                <Link onClick={handleLogout} className='link'>
                    <FontAwesomeIcon icon={faClock} /> Logout
                </Link>
            </div>
        </div>
  )
}

export default EmployeeVerticalNav