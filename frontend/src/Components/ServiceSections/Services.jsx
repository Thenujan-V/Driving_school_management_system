import React, { useState } from 'react'
import { ServicesStyle } from '../Styles'
import { homeAbout, work,sefty,free } from '../Assets';
import { Link } from 'react-router-dom';

const Services = () => {
    const items = [
        {url:'', title: 'Item 1', description: 'Description for item 1',price:'8500', newprice:'7200' },
        {url:'', title: 'Item 1', description: 'Description for item 1',price:'8500', newprice:'7200' },
        {url:'', title: 'Item 1', description: 'Description for item 1',price:'8500', newprice:'7200' },
        {url:'', title: 'Item 1', description: 'Description for item 1',price:'8500', newprice:'7200' }    
      ];
      const reNew = [
        {url:'', title: 'Item 1', description: 'Description for item 1',price:'8500', newprice:'7200' },
        {url:'', title: 'Item 1', description: 'Description for item 1',price:'8500', newprice:'7200' }
      ]
      
      const [getLicensePackage, setGetLicensePackage] = useState('')
      const [getRenewLicensePackage, setGetReNewLicensePackage] = useState('')
      
      


  return (
    <section id='services'>
        <h1 className='text-center pt-4'>OUR SERVICES</h1>
        <p className='text-center p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quod dignissimos obcaecati praesentium autem nostrum qui temporibus. Exercitationem quibusdam aperiam dicta repellat adipisci ex, aliquid fugit quo, rerum dolor libero. Officia ex totam blanditiis omnis facere accusantium, amet impedit iure!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae sed nisi perspiciatis accusamus tempore excepturi incidunt odio. Iusto, tempore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores nesciunt quibusdam odit commodi nemo quo? Nihil officiis quo corporis ab dignissimos, est iure, alias saepe mollitia quae dolorem cupiditate esse porro aliquid minus beatae eveniet necessitatibus ut! Libero officiis maxime voluptatum perspiciatis voluptate quos ducimus magni asperiores eius quibusdam.
        </p>
        <div className="container">
            <div className="row">
                <div id="new-license">
                    <h2 className='pt-4'>GET LICENSE</h2>
                    <p className='text-center pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ducimus, nihil quos officiis minus reiciendis sed temporibus quisquam necessitatibus unde eum omnis? Temporibus, commodi maxime. Eveniet, corrupti? Accusamus, excepturi eveniet?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias, itaque nisi nulla tenetur autem commodi fuga ullam accusantium dolore illum nam libero. Amet dolor excepturi ratione? Libero, maiores inventore.
                    </p>
                    <div className="container">
                        <div className="row text-center ">
                            {items.map((item, index) => (
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12 pt-4">
                                    <div class="card">
                                        <img src={homeAbout} class="card-img-top" alt="pic1" />
                                        <div class="card-body">
                                            <h4 class="card-title ">{item.title}</h4>
                                            <p class="card-text m-0" id='para'>{item.description}.</p>
                                            <p class="card-text" id='price'>LKR <span>{item.price}</span> {item.newprice} </p>
                                            <Link to='' class="btn btn-primary" id='btn'>Instructions</Link>
                                            <Link  to='' class="btn btn-primary" id='btn'>Buy Now</Link>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>      
                    </div>
                </div>

                <div id="renew-license">
                    <h2 className='pt-5'>RE-NEW LICENSE</h2>
                    <p className='text-center pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ducimus, nihil quos officiis minus reiciendis sed temporibus quisquam necessitatibus unde eum omnis? Temporibus, commodi maxime. Eveniet, corrupti? Accusamus, excepturi eveniet?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias, itaque nisi nulla tenetur autem commodi fuga ullam accusantium dolore illum nam libero. Amet dolor excepturi ratione? Libero, maiores inventore.
                    </p>
                    <div className="container">
                        <div className="row text-center ">
                            {reNew.map((item, index) => (
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12 pt-4">
                                    <div class="card">
                                        <img src={homeAbout} class="card-img-top" alt="pic1" />
                                        <div class="card-body">
                                            <h4 class="card-title ">{item.title}</h4>
                                            <p class="card-text m-0" id='para'>{item.description}.</p>
                                            <p class="card-text" id='price'>LKR <span>{item.price}</span> {item.newprice} </p>
                                            <Link to='' class="btn btn-primary" id='btn'>Instructions</Link>
                                            <Link  to='' class="btn btn-primary" id='btn'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div id="online-services">
                    <h2 className='pt-5'>ONLINE LEARNINGS</h2>
                    <p className='text-center pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ducimus, nihil quos officiis minus reiciendis sed temporibus quisquam necessitatibus unde eum omnis? Temporibus, commodi maxime. Eveniet, corrupti? Accusamus, excepturi eveniet?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias, itaque nisi nulla tenetur autem commodi fuga ullam accusantium dolore illum nam libero. Amet dolor excepturi ratione? Libero, maiores inventore.
                    </p>
                    <div className="container">
                        <div className="row" id='services'>
                            <Link to = '' className="col-lg-4 col-md-6 col-sm-6 col-12 text-center  p-5" id='service'>
                                <img src={sefty} alt="" className='img-fluid col-lg-4 col-md-6 col-sm-6 col-12'/>
                                <h3>Road Signs</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur assumenda in, corrupti porro totam nihil facilis dolor officia ipsam quia!</p>
                                <img src={free} alt="" id='freeImg' className='img-fluid'/>
                            </Link>
                            <Link to = '' className="col-lg-4 col-md-6 col-sm-6 col-12 text-center p-5" id='service'>
                                <img src={sefty} alt="" className='img-fluid col-lg-4 col-md-6 col-sm-6 col-12'/>
                                <h3>Past Papers</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur assumenda in, corrupti porro totam nihil facilis dolor officia ipsam quia!</p>
                                <img src={free} alt="" id='freeImg' className='img-fluid'/>
                            </Link>
                            <Link to = '' className="col-lg-4 col-md-6 col-sm-6 col-12 text-center p-5" id='service'>
                                <img src={sefty} alt="" className=' img-fluid col-lg-4 col-md-6 col-sm-6 col-12'/>
                                <h3>Additional Meterials</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur assumenda in, corrupti porro totam nihil facilis dolor officia ipsam quia!</p>
                                <img src={free} alt="" id='freeImg' className='img-fluid'/>
                            </Link>
                            
                        </div>
                    </div>
                </div>

                <div id="live-sessions">
                    <h2 className='pt-4'>LIVE SESSIONS</h2>
                    <p className='text-center pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ducimus, nihil quos officiis minus reiciendis sed temporibus quisquam necessitatibus unde eum omnis? Temporibus, commodi maxime. Eveniet, corrupti? Accusamus, excepturi eveniet?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias, itaque nisi nulla tenetur autem commodi fuga ullam accusantium dolore illum nam libero. Amet dolor excepturi ratione? Libero, maiores inventore.
                    </p>
                    <div className="container">
                        <div className="row" id='sessions'>
                            <Link to = '' className="col-lg-4 col-md-6 col-sm-6 col-12 text-center  p-5" id='session'>
                                <img src={sefty} alt="" className='img-fluid col-lg-4 col-md-6 col-sm-6 col-12'/>
                                <h3>Exam Preparations</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur assumenda in, corrupti porro totam nihil facilis dolor officia ipsam quia!</p>                            
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services