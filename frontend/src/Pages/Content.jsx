import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ContentDetails from '../Components/ContentDetails'
import CourseMeterial from '../Components/CourseMeterial'
import VerticalNavbar from '../Components/VerticalNavbar'

const Content = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' , height: '100vh' }}>
        <VerticalNavbar />
        <div style={{ flex: 1 }}>
          <ContentDetails />
          <CourseMeterial />
        </div>
      </div>
    </>
  )
}

export default Content