import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const VerticalNavbar = () => {
  return (
    <>
        <div className="vertical-menu">
            <h2>DashBoard</h2>
            <div className="links">
                <Link to='/userprofile' className='link'>
                    <FontAwesomeIcon icon={faIdCard} /> User Profile
                </Link>
                <Link to='/userdocuments' className='link'>
                    <FontAwesomeIcon icon={faFolder} /> User Documents
                </Link>
                <Link to='/paymentDetails' className='link'>
                    <FontAwesomeIcon icon={faCreditCard} /> Payment Details
                </Link>
                <Link to='/content' className='link'>
                    <FontAwesomeIcon icon={faCalendarDays} /> Dates & Times
                </Link>
                <Link to='/results' className='link'>
                    <FontAwesomeIcon icon={faSquarePollHorizontal} /> Results
                </Link>
            </div>
        </div>
    </>
  )
}

export default VerticalNavbar