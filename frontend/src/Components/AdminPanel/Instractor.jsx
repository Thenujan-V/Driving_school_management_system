import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { showAllUsers } from '../../Services/userService'
import { Link } from 'react-router-dom'

const Instractor = () => {
    const [usersApi, setUsersApi] = useState([])

    useEffect(() => {
        const fetchUsersDetails = async () => {
            try{
                const response = await showAllUsers()
                console.log('rrreee : ',response)
                setUsersApi(response)
            }
            catch(error){
                console.log('error : ',error)
                setUsersApi(error)
            }
        }
        fetchUsersDetails()
    },[])

  return (
    <div style={{display:'flex', minHeight:'90vh', backgroundColor:'var(--green)'}}>
        <AdminVerticalNav />
        <div className='container studentsDetailsShow' style={{flex:'1'}}>
            <h1 className='text-center mt-4'>Instractors Details</h1>
            {
                usersApi &&
                usersApi.map((userDetail) => (
                    <div className='row w-75'>
                        <p className='col-lg-3 col-md-3 col-3'>{userDetail.first_name}</p>
                        <p className='col-lg-3 col-md-3 col-3'>{userDetail.last_name}</p>
                        <p className='col-lg-3 col-md-3 col-3'>{userDetail.email}</p>
                        <Link  className='col-lg-3 col-md-3 col-3 view' style={{backgroundColor:'red', color:'black'}}>Delete</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Instractor