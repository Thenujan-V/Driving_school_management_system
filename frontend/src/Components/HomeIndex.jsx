import React from 'react'
import { HomeIndexStyle } from './Styles'
import { landing } from './Assets'
import { Link } from 'react-router-dom'

const HomeIndex = () => {
  return (
    <div className='landingPage'>
        {/* <div id="home">
          <div className="container-fluid" id='img'>
            <h1>SARA DRIVING SCHOOL</h1>
            <p>"Drive Safe, Drive Confident: Your Journey Starts Here!"</p>
          </div>
        </div> */}


        <div className="container">
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-6 paras'>
                <p className='mainPara'>
                Learn to drive with confidence under expert guidance </p>
                <p className='subPara'>
                  we offer personalized lessons tailored to your needs. Whether you're a beginner or seeking to improve your skills, our modern curriculum and supportive environment ensure you're road-ready in no time. Join us and drive towards a safer future!
                </p>
                <div className='buttons'>
                  <Link to='/signup' className='btn get'>Get Started</Link>
                  <Link to='/service' className='btn let'>Let's Explore</Link>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-6'>
                <img src={landing} alt="" height='700px'/>
            </div>
          </div>  
        </div>
    </div>
  )
}

export default HomeIndex