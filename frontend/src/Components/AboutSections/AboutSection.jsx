import React from 'react'
import { AboutSectionStyle } from '../Styles'
import { homeAbout,sefty,learn } from '../Assets'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <>
        <section id='about-page'>
            <div className="container pb-3" >
                <h1 className='text-center pt-4 pb-5'>ABOUT US</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12" id='para'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit modi atque vero aliquam fuga quae deserunt eos accusantium dolorem quo ipsam ratione, dolor maiores. Hic doloribus aliquam, labore necessitatibus nemo inventore placeat nostrum illum et veritatis fugiat harum, iste facilis at dolorum ea. Nobis cum, ab saepe doloribus necessitatibus consequuntur! <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam ut libero, illum pariatur voluptatibus, obcaecati id enim error aspernatur officiis, et iste! Officiis reiciendis tempore vero quaerat praesentium. Dolor temporibus molestiae, officiis quam sit neque voluptates commodi earum unde consequuntur sequi! Consequuntur nostrum illo ad placeat voluptas explicabo maxime? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum nesciunt quaerat eum eaque nulla tempora. Eius atque quis libero perspiciatis, quas in repudiandae, debitis fugit similique mollitia sit et.
                        <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, minima quidem excepturi quas assumenda quibusdam perferendis itaque, mollitia iure maiores ad numquam. Officia aliquid explicabo animi voluptatum, accusantium cupiditate fuga excepturi beatae, rerum, exercitationem quis laboriosam eius possimus at eligendi! Facilis dolores deleniti reiciendis, natus quidem, eius et eligendi in, quasi cupiditate ab vel corrupti quaerat nisi incidunt maxime molestiae facere cumque fugiat similique nobis. Quo quibusdam dicta libero quasi ipsa ipsum mollitia maxime qui consequatur excepturi adipisci quidem aspernatur suscipit iure illum quisquam, alias repellat, ipsam voluptate nisi nobis aliquid quia rerum. Exercitationem voluptatum pariatur debitis quasi, tempora praesentium.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={homeAbout} alt="" className='img-fluid'/>
                    </div>
                </div>
                <h3 className='text-center'><Link to='/signup'>Click Here</Link>, Register And Learn Safe Drive </h3>
            </div>
        </section>
        <section id='about-page'>
            <div className="container pb-3" >
                <h1 className='text-center pt-4 pb-5'>ABOUT OUR INSTRUCTORS</h1>
                <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                        <img src={homeAbout} alt="" className='img-fluid'/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12" id='para'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit modi atque vero aliquam fuga quae deserunt eos accusantium dolorem quo ipsam ratione, dolor maiores. Hic doloribus aliquam, labore necessitatibus nemo inventore placeat nostrum illum et veritatis fugiat harum, iste facilis at dolorum ea. Nobis cum, ab saepe doloribus necessitatibus consequuntur! <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam ut libero, illum pariatur voluptatibus, obcaecati id enim error aspernatur officiis, et iste! Officiis reiciendis tempore vero quaerat praesentium. Dolor temporibus molestiae, officiis quam sit neque voluptates commodi earum unde consequuntur sequi! Consequuntur nostrum illo ad placeat voluptas explicabo maxime? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum nesciunt quaerat eum eaque nulla tempora. Eius atque quis libero perspiciatis, quas in repudiandae, debitis fugit similique mollitia sit et.
                        <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, minima quidem excepturi quas assumenda quibusdam perferendis itaque, mollitia iure maiores ad numquam. Officia aliquid explicabo animi voluptatum, accusantium cupiditate fuga excepturi beatae, rerum, exercitationem quis laboriosam eius possimus at eligendi! Facilis dolores deleniti reiciendis, natus quidem, eius et eligendi in, quasi cupiditate ab vel corrupti quaerat nisi incidunt maxime molestiae facere cumque fugiat similique nobis. Quo quibusdam dicta libero quasi ipsa ipsum mollitia maxime qui consequatur excepturi adipisci quidem aspernatur suscipit iure illum quisquam, alias repellat, ipsam voluptate nisi nobis aliquid quia rerum. Exercitationem voluptatum pariatur debitis quasi, tempora praesentium.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* why choose us */}
        <section id='choose'>
            <div className="container-fluid pt-3">
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
        
    </>
  )
}

export default AboutSection