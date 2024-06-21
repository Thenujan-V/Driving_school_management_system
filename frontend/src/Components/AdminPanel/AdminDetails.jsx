import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { showAllUsers } from '../../Services/userService'
import { Link } from 'react-router-dom'
import { deleteAdmin, showAllAdmins } from '../../Services/adminService'


const AdminDetails = () => {
    const [usersApi, setUsersApi] = useState([])

    useEffect(() => {
        const fetchUsersDetails = async () => {
            try{
                const response = await showAllAdmins()
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

            const response = await showAllAdmins()
            setUsersApi(response)
        }
        catch(error){
            console.log('error :', error)
        }
    }

  return (
        <div className='container studentsDetailsShow' style={{ backgroundColor:'var(--green)',minHeight:'120vh'}}>
            <h1 className='text-center mt-4'>Admins Details</h1>
            <div className="row head w-75 text-center">
                <p className='col-lg-1 col-md-1 col-1'>id</p>
                <p className='col-lg-2 col-md-2 col-2'>First Name</p>
                <p className='col-lg-2 col-md-2 col-2'>Last Name</p>
                <p className='col-lg-2 col-md-2 col-2'>Phone Number</p>
                <p className='col-lg-3 col-md-3 col-3'>NIC Number</p>
                <p className='col-lg-2 col-md-2 col-2'>Delete</p>

            </div>
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
                                      }              </div>
                ))
            }
        </div>
  )
}

export default AdminDetails