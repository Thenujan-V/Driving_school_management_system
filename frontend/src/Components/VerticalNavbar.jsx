import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { showStudents, student_details } from '../Services/studentService';
import { logout, retrieveId } from '../Services/getToken';
import { showAllUsers } from '../Services/userService';

const VerticalNavbar = () => {
    const navigate = useNavigate();
    const decodedToken = retrieveId();
    const [user_id, setUser_id] = useState('');
  
    useEffect(() => {
      if (decodedToken) {
        setUser_id(decodedToken.id);
        if (decodedToken.role === 'admin' || decodedToken.role === 'instructer') {
          navigate('/signin');
        }
      } else {
        setUser_id('');
      }
    }, [decodedToken]);

    const [user, setUsers] = useState([])

    useEffect(( ) => {
        const fetchStudent =async () => {
            try{
                const response = await showStudents()
                setUsers(response)
            }
            catch(error){
                console.log('error :', error)
            }
        }
        fetchStudent()
    }, [user_id])

    const foundStudent = user && user.find(student => student.id === user_id)

    const handleLogout = () => {
        logout()
        navigate('/')
        window.location.reload()
    }

  return (
    <>
        <div className="vertical-menu">
            <h2>DashBoard</h2>
            <div className="links">
                <Link to='/userprofile' className='link'>
                    <FontAwesomeIcon icon={faIdCard} /> User Profile
                </Link>
                {   foundStudent &&
                    <Link to='/userdocuments' className='link'>
                        <FontAwesomeIcon icon={faFolder} /> User Documents
                    </Link>
                }

                {foundStudent && <Link to='/paymentDetails' className='link'>
                    <FontAwesomeIcon icon={faCreditCard} /> Payment Details
                </Link>}

                {foundStudent && <Link to='/content' className='link'>
                    <FontAwesomeIcon icon={faCalendarDays} /> Dates & Times
                </Link>}
                {foundStudent &&<Link to='/results' className='link'>
                    <FontAwesomeIcon icon={faSquarePollHorizontal} /> Results
                </Link>}
                {<Link onClick={handleLogout} className='link'>
                    <FontAwesomeIcon icon={faSquarePollHorizontal} /> Logout
                </Link>}
            </div>
        </div>
    </>
  )
}

export default VerticalNavbar