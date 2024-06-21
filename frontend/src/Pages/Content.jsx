import React from 'react'
import Navbar from '../Components/Navbar'
import ContentDetails from '../Components/ContentDetails'
import CourseMeterial from '../Components/CourseMeterial'
import VerticalNavbar from '../Components/VerticalNavbar'

const Content = () => {
  return (
    <>
      <div style={{ display: 'flex' , minHeight: '90vh' }}>
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