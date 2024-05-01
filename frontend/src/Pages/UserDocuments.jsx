import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import VerticalNavbar from '../Components/VerticalNavbar'
import Documents from '../Components/Documents'

const UserDocuments = () => {
  return (
    <>
        <Navbar />
        <div style={{ display: 'flex' , height: '100vh' }}>
            <VerticalNavbar />
            <div style={{ flex: 1 }}>
                <Documents />
            </div>
        </div>
    </>
  )
}

export default UserDocuments