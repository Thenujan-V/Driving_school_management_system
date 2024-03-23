import React from 'react'
import './HomeSections.css'
import {homeAbout,work,learn,lession,sefty} from '../Assets'
import { Link } from 'react-router-dom'

const HomeSection = () => {
  return (
    <>
    {/* AboutUs & our features */}
        <section id='about'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12" id='about-us'>
                        <div className="row">
                            <h1 className='text-center'>ABOUT US</h1>
                            <div className='row'>
                                <img src={homeAbout} alt="about pic" className='col-lg-6 col-12 img-fluid'/>
                                <p className='col-lg-6 col-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto nulla quibusdam non. Molestiae quidem, debitis ea cupiditate facere libero rerum temporibus porro, natus deleniti accusantium fugit voluptatibus impedit repellat neque nesciunt earum veritatis maxime tenetur rem! A ullam dolorum debitis illum temporibus, minus voluptates. Esse maiores ullam impedit atque saepe! <br />
                                <Link to='' className='btn btn-primary' id='seemoreBtn'>see more</Link></p>  
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12" id='our-features'>
                        <h1 className='text-center'>OUR FEATURES</h1>
                        <div id='features'>
                                <div className="row" id='feature'>
                                    <img src={learn} alt="about pic" className='col-lg-4 col-md-4 col-sm-4 col-12 img-fluid'/>
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <h2>Mock Driving Tests</h2>
                                        <p>Conduct mock driving tests to help students prepare for their official driving exams and build confidence behind the wheel.</p>
                                    </div>
                                </div>
                                <div className="row" id='feature'>
                                    <img src={work} alt="about pic" className='col-lg-4 col-md-4 col-sm-4 col-12 img-fluid'/>
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <h2>Vehicle Maintenance Education</h2>
                                        <p>Teach basic vehicle maintenance skills, such as checking tire pressure, fluid levels, and performing routine inspections, to help students become responsible drivers.</p>
                                    </div>
                                </div>
                                <div className="row" id='feature'>
                                    <img src={lession} alt="about pic" className='col-lg-4 col-md-4 col-sm-4 col-12 img-fluid'/>
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <h2>Flexible Lessons</h2>
                                        <p>Provide flexible scheduling options to accommodate students' busy schedules, including evening and weekend lessons.</p>
                                    </div>
                                </div>   
                        </div>
                    </div>
                </div>
            </div>
        </section> 

        {/* why choose us */}
        <section id='choose'>
            <div className="container-fluid">
                <div className="container">
                    <h2 className='text-center'>WHY CHOOSE US...?</h2>
                    <p className='text-center'>"At SARA Driving School, we stand out with our personalized approach to driver education. Our team of experienced and licensed instructors is dedicated to providing comprehensive lessons that cater to individual learning styles. Safety is our top priority, reflected in our dual-control vehicles and emphasis on defensive driving techniques. With flexible scheduling options and a supportive learning environment, we ensure every student gains the skills and confidence needed to navigate the road safely. Whether you're a beginner or seeking advanced training, choose SARA Driving School for expert instruction and a pathway to becoming a confident and responsible driver."</p>
                    <div id="contents" className='row mt-5'>
                        <div id="content" className='p-3 col-lg-4 col-md-12 col-12 text-center'>
                            <img src={sefty} alt="" className='col-lg-4 col-md-4 col-sm-4 col-12 img-fluid' />
                            <h3>Best Safety Measures</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque voluptates rem maiores doloribus debitis blanditiis laboriosam maxime aspernatur consectetur?</p>
                        </div>
                        <div id="content" className=' p-3 col-lg-4 col-md-12 col-12 text-center'>
                            <img src={sefty} alt="" className='col-lg-4 col-md-4 col-sm-4 col-12 img-fluid' />
                            <h3>Best Safety Measures</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque voluptates rem maiores doloribus debitis blanditiis laboriosam maxime aspernatur consectetur?</p>
                        </div>
                        <div id="content" className=' p-3 col-lg-4 col-md-12 col-12 text-center'>
                            <img src={sefty} alt="" className='col-lg-4 col-md-4 col-sm-4 col-12 img-fluid' />
                            <h3>Best Safety Measures</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloremque voluptates rem maiores doloribus debitis blanditiis laboriosam maxime aspernatur consectetur?</p>
                        </div>
                    </div>
                </div>
                <div id='extra-content' className='row mt-5 pt-3'>
                    <div className="col-lg-4 p-0" id='contents'>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-4" id='image'>
                                <img src={learn} alt="" className='img-fluid'/>
                            </div>
                            <div id="content" className='col-lg-9 col-md-8 col-8 p-0'>
                                <h4 id='student-count'>1000+</h4>
                                <h4>Happy Students</h4>
                                <p id='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequatur eveniet ipsum natus illo delectus.</p>
                            </div>
                        </div>  
                    </div>
                    <div className="col-lg-4 p-0" id='contents'>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-4" id='image'>
                                <img src={learn} alt="" className='img-fluid'/>
                            </div>
                            <div id="content" className='col-lg-9 col-md-8 col-8 p-0'>
                                <h4 id='student-count'>1000+</h4>
                                <h4>Happy Students</h4>
                                <p id='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequatur eveniet ipsum natus illo delectus.</p>
                            </div>
                        </div>  
                    </div>
                    <div className="col-lg-4 p-0" id='contents'>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-4" id='image'>
                                <img src={learn} alt="" className='img-fluid'/>
                            </div>
                            <div id="content" className='col-lg-9 col-md-8 col-8 p-0'>
                                <h4 id='student-count'>1000+</h4>
                                <h4>Happy Students</h4>
                                <p id='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequatur eveniet ipsum natus illo delectus.</p>
                            </div>
                        </div>  
                    </div>
                    
                </div>
            </div>
        </section>

        {/* our digital services */}
        <section id='our-services'>
            <h1 className='text-center pt-4'>OUR DIGITAL SERVICES</h1>
            <div className="container" >
                <div className="row">
                    <Link className="col-lg-4 col-md-4 col-12 text-center  p-5" id='service'>
                        <img src={sefty} alt="" className='col-lg-4 col-md-4 col-sm-4 col-12 img-fluid'/>
                        <h3>Road Signs</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur assumenda in, corrupti porro totam nihil facilis dolor officia ipsam quia!</p>
                    </Link>
                    <Link className="col-lg-4 col-md-4 col-12 text-center p-5" id='service'>
                        <img src={sefty} alt="" className='col-lg-4 col-md-4 col-sm-4 col-12 img-fluid'/>
                        <h3>Past Papers</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur assumenda in, corrupti porro totam nihil facilis dolor officia ipsam quia!</p>
                    </Link>
                    <Link className="col-lg-4 col-md-4 col-12 text-center p-5" id='service'>
                        <img src={sefty} alt="" className='col-lg-4 col-md-4 col-sm-4 col-12 img-fluid'/>
                        <h3>New Registration</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur assumenda in, corrupti porro totam nihil facilis dolor officia ipsam quia!</p>
                    </Link>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default HomeSection