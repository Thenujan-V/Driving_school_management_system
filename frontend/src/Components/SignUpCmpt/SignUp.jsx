import React, { useState } from 'react'
import './SignUp.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);

    // if (Object.keys(errors).length === 0) {
    //   console.log('Form submitted:', formData);
    // }
  };
  return (
    <>
      <div className="row m-0" id='signupPage'>
          <div className="col-xl-6 col-lg-6  col-12 p-0" id='img'></div>
          <div className="col-xl-6 col-lg-6  col-12 p-0" id='form'>
            <h1>Signup here</h1>
            <form onSubmit={handleSubmit} className=''>
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input className="form-control" type="text" id='firstName' name='firstName' placeholder='First Name' value={formData.firstName} onChange={handleChange}   />
                  <p>{errors.firstName}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input className="form-control" type="text" id='lastName' name='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} />
                  <p>{errors.lastName}</p>
                </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input className="form-control" type="text" id='email' name='email' placeholder='Example@gmail.com' value={formData.email} onChange={handleChange}  />
                <p>{errors.email}</p>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input className="form-control" type="password" id='password' name='password' placeholder='password' value={formData.password} onChange={handleChange} />
                <p>{errors.password}</p>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input className="form-control" type="password" id='confirmPassword' name='confirmPassword' placeholder='Re-Enter Paswword' value={formData.confirmPassword} onChange={handleChange}/>
                <p>{errors.confirmPassword}</p>
              </div>
              <div className="form-group mt-1 pb-4" id='btnTag'>
                <button className='btn btn-primary mt-4' type="submit">SignUp</button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default SignUp