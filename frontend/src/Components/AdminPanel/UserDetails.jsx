import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { deleteAccount, showAllUsers } from '../../Services/userService'
import { Link } from 'react-router-dom'
import { viewDetails } from '../Styles'

const UserDetails = () => {
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

    const handleDelete = async(userId) => {
        console.log('user :',userId)
        try{
            await deleteAccount(userId)
            alert('successfully deleted')
        }
        catch(error){
            console.log('error :', error)
        }
    }


  return (
    <div style={{display:'flex', minHeight:'100vh', backgroundColor:'var(--green)'}}>
        <AdminVerticalNav />
        <div className='container studentsDetailsShow' style={{flex:'1'}}>
            <h1 className='text-center mt-4'>User Details</h1>
            {
                usersApi &&
                usersApi.map((userDetail) => (
                    <div className='row w-75'>
                        <p className='col-lg-3 col-md-3 col-3'>{userDetail.first_name}</p>
                        <p className='col-lg-3 col-md-3 col-3'>{userDetail.last_name}</p>
                        <p className='col-lg-3 col-md-3 col-3'>{userDetail.email}</p>
                        { userDetail.active === 1 ?
                            <Link  className='col-lg-3 col-md-3 col-3 view' onClick={() => handleDelete(userDetail.id)} style={{backgroundColor:'red', color:'black'}}>Delete</Link> :
                            <Link  className='col-lg-3 col-md-3 col-3 view' style={{backgroundColor:'#C80036', color:'#FFF5E1'}}>Deleted</Link> 
                        }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default UserDetails