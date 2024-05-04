import React from 'react'
import Navbar from '../Components/Navbar'
import VerticalNavbar from '../Components/VerticalNavbar'
import Profile from '../Components/Profile'

const UserProfile = () => {
  return (
    <>
        <Navbar />
        <div style={{ display: 'flex' , height: '90vh' }}>
            <VerticalNavbar />
            <div style={{ flex: 1 }}>
                <Profile />
            </div>
        </div>
    </>
  )
}

export default UserProfile