import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';


const EmployeeVerticalNav = () => {
  return (
    <div className="vertical-menu" style={{minHeight:'100vh'}}>
            <h2>DashBoard</h2>
            <div className="links">
                <Link to='/employeeProfile' className='link'>
                    <FontAwesomeIcon icon={faClock} /> Profile
                </Link>
                <br />
                <Link to='/viewStudents' className='link'>
                    <FontAwesomeIcon icon={faIdCard} /> View Student
                </Link> 
            </div>
        </div>
  )
}

export default EmployeeVerticalNav