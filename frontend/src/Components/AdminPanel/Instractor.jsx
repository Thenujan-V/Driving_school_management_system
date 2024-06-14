import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { showAllUsers } from '../../Services/userService'
import { Link } from 'react-router-dom'
import { deleteAdmin, showAllInstructers } from '../../Services/adminService'

const Instractor = () => {
    const [usersApi, setUsersApi] = useState([])

    useEffect(() => {
        const fetchUsersDetails = async () => {
            try{
                const response = await showAllInstructers()
                setUsersApi(response)
            }
            catch(error){
                console.log('error : ',error)
                setUsersApi(error)
            }
        }
        fetchUsersDetails()
    },[])

    const handleDelete = async(userId) => {
        console.log('user :',userId)
        try{
            await deleteAdmin(userId)
            alert('successfully deleted')
            
            const response = await showAllInstructers()
            setUsersApi(response)
        }
        catch(error){
            console.log('error :', error)
        }
    }

  return (
    <div style={{display:'flex', minHeight:'90vh', backgroundColor:'var(--green)'}}>
        <AdminVerticalNav />
        <div className='container studentsDetailsShow' style={{flex:'1'}}>
            <h1 className='text-center mt-4'>Instractors Details</h1>
            {
                usersApi &&
                usersApi.map((userDetail) => (
                    <div className='row w-75'>
                        <p className='col-lg-1 col-md-1 col-1'>{userDetail.wId}</p>
                        <p className='col-lg-2 col-md-2 col-2'>{userDetail.first_name}</p>
                        <p className='col-lg-2 col-md-2 col-2'>{userDetail.last_name}</p>
                        <p className='col-lg-2 col-md-2 col-2'>{userDetail.phone_number}</p>
                        <p className='col-lg-3 col-md-3 col-3'>{userDetail.NIC_number}</p>
                        { userDetail.active === 1 ?
                            <Link  className='col-lg-3 col-md-3 col-3 view' onClick={() => handleDelete(userDetail.wId)} style={{backgroundColor:'red', color:'black'}}>Delete</Link> :
                            <Link  className='col-lg-3 col-md-3 col-3 view' style={{backgroundColor:'#C80036', color:'#FFF5E1'}}>Deleted</Link> 
                        }                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Instractor