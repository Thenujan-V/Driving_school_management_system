import React from 'react'
import ContactIndex from '../Components/ContactIndex/ContactIndex'
import ContactSection from '../Components/ContactSection/ContactSection'
import Navbar from '../Components/Navbar/Navbar'

const Contact = () => {
  return (
    <>
        <Navbar />
        <ContactIndex />
        <ContactSection />
    </>
  )
}

export default Contact