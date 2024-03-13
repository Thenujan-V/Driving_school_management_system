import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import login from '../Assets/login.jpeg'
import './SignIn.css'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <>
        <div className="row m-0" id='signinPage'>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 p-0" id='img'></div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 p-0" id='form'>
            <h1>Login here</h1>
            <form onSubmit={handleSubmit} className=''>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input className="form-control" type="email" id='email' placeholder='Example@gmail.com' value={email} onChange={handleEmailChange} required />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="password" className="form-label">Password</label>
                <input className="form-control" type="password" id='password' placeholder='' value={password} onChange={handlePasswordChange} required />
              </div>
              <div className="form-group mt-1 pb-4" id='btnTag'>
                <a href="#">Forgot password?</a>
                <button className='btn btn-primary mt-4' type="submit">Login</button>
              </div>
              <div className="form-group text-center mt-3" id='signup'>
                <a href='#'>Create your account here <FontAwesomeIcon icon={faArrowRight} /></a>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default SignIn