import React, { useState } from 'react'
import { ContactStyle } from './Styles'
import { home,time,mobile,phone,mail} from './Assets'

const ContactSection = () => {

  const branches = [
    {place:'jaffna',address:'jaffna chunnakam',phoneNo:'0709080987', mobileNo:'0213423453',open:'8am to 5pm'},
    {place:'jaffna',address:'jaffna chunnakam',phoneNo:'0709080987', mobileNo:'0213423453',open:'8am to 5pm'},
    {place:'jaffna',address:'jaffna chunnakam',phoneNo:'0709080987', mobileNo:'0213423453',open:'8am to 5pm'},

  ]

  const [fullName, setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!message.trim()) {
      errors.message = 'Message is required';
    }
    setErrors(errors);

  }

  return (
    <>
      <section id='contact-us'>
        <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-0">
            <h1 className='text-center pt-5'>CONTACT US</h1>
            <form action="" className='p-4'>
              <div className='form-group'>
                <label htmlFor="name" className='form-label'>Full Name</label>
                <input type="text" 
                        className='form-control ' 
                        id='name' name='name' 
                        placeholder='Full Name'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        />
                        <p>{errors.fullName}</p>
              </div>
              <div className='form-group'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="text" 
                        className='form-control ' 
                        id='email' name='email' 
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>{errors.email}</p>

              </div>
              <div className='form-group'>
                <label htmlFor="message" className='form-label'>Message</label>
                <textarea type="text" 
                        className='form-control ' 
                        id='message' name='message' 
                        placeholder='Type your messages'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                        <p>{errors.message}</p>

              </div>
              <button onClick={handleSubmit} className='btn form-control w-25 mt-3 '>Send</button>
            </form>
          </div>
          <div className="col-lg-6 col-12 p-0">
            <h1 className='text-center pt-5 pb-5'>DETAILS</h1>
              <div  className=''>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12" id="head-off">
                    <h2 >HEAD OFFICE</h2>
                    <div id="details" >
                      <div id="detail">
                        <img src={home} alt="home pic" className='img-fluid'  />
                        <div className="data">
                          <p>Address</p>
                          <p>jaffna no210 kasthuriaar rod</p>
                        </div>
                      </div>
                      <div id="detail" >
                        <img src={time} alt="time pic" className='img-fluid' />
                        <div className="data">
                          <p >Open Hours</p>
                          <p>8am to 5pm</p>
                        </div>
                      </div>
                      <div id="detail">
                        <img src={mail} alt="email pic" className='img-fluid' />
                        <div className="data">
                          <p >Email</p>
                          <p>8am to 5pm</p>
                        </div>
                      </div>
                      <div id="detail" >
                        <img src={phone} alt="phone pic" className='img-fluid' />
                        <div className="data">
                          <p >Contact Number</p>
                          <p>8am to 5pm</p>
                        </div>
                      </div>
                      <div id="detail" >
                        <img src={mobile} alt="mobile pic" className='img-fluid' />
                        <div className="data">
                          <p>Contact Number</p>
                          <p>8am to 5pm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <h2>BRANCHES</h2>
                      <div id="branches">
                        {branches.map((branch,index) => (
                            <div>
                              <h3>{branch.place} Branch</h3>
                              <div id="details" >
                              <div id="detail">
                                <img src={home} alt="home pic" className='img-fluid'  />
                                <div className="data">
                                  <p>Address</p>
                                  <p>{branch.address}</p>
                                </div>
                              </div>
                              <div id="detail" >
                                <img src={time} alt="time pic" className='img-fluid' />
                                <div className="data">
                                  <p >Open Hours</p>
                                  <p>{branch.open}</p>
                                </div>
                              </div>
                              <div id="detail" >
                                <img src={phone} alt="phone pic" className='img-fluid' />
                                <div className="data">
                                  <p>Mobile</p>
                                  <p>{branch.phoneNo}</p>
                                </div>
                              </div>
                              <div id="detail" >
                                <img src={mobile} alt="mobile pic" className='img-fluid' />
                                <div className="data">
                                  <p>Phone</p>
                                  <p>{branch.mobileNo}</p>
                                </div>
                              </div>
                            </div>
                            </div>
                          ))
                        }
                        
                      </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        </div>

        {/* section style */}
        <div class="custom-shape-divider-bottom-1711308386">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
      </section>
    </>
  )
}

export default ContactSection