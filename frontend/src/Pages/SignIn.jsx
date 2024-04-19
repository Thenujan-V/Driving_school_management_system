import React from 'react'
import { useState } from 'react'
import { SigninStyle } from '../Components/Styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {signinService} from '../Services/userService'
import { useNavigate } from 'react-router-dom';



const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiResponse, setApiResponse] = useState('')

  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await signinService(email, password)
      if(response == false){
        alert('username or password is not valid')
        setApiResponse('signin faild...!')

      }
      else{
        localStorage.setItem('authToken', response.token);
        setApiResponse("signin success")
        navigate('/')
      }

    }
    catch(error){
      setApiResponse('signin faild...!')
      console.log('Error: ', error)
    }
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
                <Link to="/signup">Create your account here <FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default SignIn