import React from 'react'
import { Link } from 'react-router-dom'
import VerticalNavbar from '../Components/VerticalNavbar'
import Navbar from '../Components/Navbar'
import Content from './Content'

const UserDashboard = () => {
  return (
    <>
        <Navbar />
        <VerticalNavbar />
    </>
  )
}

export default UserDashboard