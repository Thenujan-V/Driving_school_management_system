import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HomeIndex from '../Components/HomeIndex/HomeIndex'
import HomeSection from '../Components/HomeSections/HomeSection'


const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeIndex />
        <HomeSection />
    </div>
  )
}

export default Home