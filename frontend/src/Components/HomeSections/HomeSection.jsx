import React from 'react'
import { HomeSectionStyle } from '../Styles'
import {homeAbout,work,learn,lession,sefty} from '../Assets'
import { Link } from 'react-router-dom'

const HomeSection = () => {
    const items = [
        {url:'', title: 'Item 1', description: 'Description for item 1',price:'8500', newprice:'7200' },
        {url:'', title: 'Item 1', description: 'Description for item 1',price:'8500', newprice:'7200' },
        {url:'', title: 'Item 1', description: 'Description for item 1',price:'8500', newprice:'7200' },
        {url:'', title: 'Item 1', description: 'Description for item 1',price:'8500', newprice:'7200' }    
      ];

        const uid = null
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
                <div className="row" id='services'>
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

        {/* Courses */}
        <section id='our-courses'>
             <h1 className='text-center pt-5'>OUR POPULAR DRIVING COURSES PACKAGES</h1>
             <p className='text-center p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem, ipsum asperiores sequi cupiditate incidunt architecto, aperiam eius odio totam accusantium fuga! Hic quidem vitae, suscipit obcaecati consequuntur iure expedita perferendis animi eos esse modi, quod architecto quam similique quaerat. Laborum sit aperiam voluptatibus quia mollitia quaerat, quos dolorum reiciendis alias nobis animi, distinctio cupiditate doloremque optio tempora ratione similique facilis velit voluptates cum! Delectus porro nulla enim ipsum. Eligendi velit facere provident porro vel! Dolore explicabo suscipit sint veritatis exercitationem commodi corporis? Suscipit vero cum at facere ea molestiae quaerat. Veritatis nulla repudiandae asperiores cupiditate quos dolore adipisci aspernatur?</p>
            <div className="container">
            <div id='courses' className='row m-0 text-center'>
                {items.map((item, index) => (
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12 pt-4">
                        <div class="card">
                            <img src={homeAbout} class="card-img-top" alt="pic1" />
                            <div class="card-body">
                                <h4 class="card-title ">{item.title}</h4>
                                <p class="card-text m-0" id='para'>{item.description}.</p>
                                <p class="card-text" id='price'>LKR <span>{item.price}</span> {item.newprice} </p>
                                <Link to={uid? 'about' : 'signin'} class="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    </>
  )
}

export default HomeSection