import React from 'react'
import ServiceIndex from '../Components/ServiceIndex/ServiceIndex'
import Navbar from '../Components/Navbar/Navbar'
import Services from '../Components/ServiceSections/Services'

const Service = () => {
  return (
    <>
        <Navbar />
        <ServiceIndex />
        <Services />
    </>
  )
}

export default Service