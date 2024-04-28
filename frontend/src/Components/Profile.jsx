import React, { useState } from 'react'
import { profile } from '../Components/Styles'
import { retrieveId } from '../Services/getToken'
const Profile = () => {
    const id = retrieveId()
    const [formData,setFormData] = useState({
        FirstName:'',
        LastName:'',
        email:''
    })
    const [apiResponse, setApiResponse] = useState('')
    const [errors, setErrors] = useState('')


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        if (!formData.FirstName.trim()) {
            errors.FirstName = 'First name is required';
        }
        if (!formData.LastName.trim()) {
            errors.LastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'First name is required';
        }

        setErrors(errors);
        try{
            if(Object.keys(errors).length === 0){
                // const response = await signupService(formData)
            setApiResponse('signup successfully...!')
                // navigate('/signin')
            }
            else{
                alert('Give correct details')
            }
        
        }
        catch(error){
            setApiResponse('Sign up failed.');
            console.log('Response : ',error.response.data)
            if(error.response.data == 'exsisting email'){
                alert('email is already used please use different email')
            }
            console.error('Error:', error);
            }

    }

  return (
    <>
        <div className="user-profile">
            <h1>user profile</h1>

            <form onSubmit={handleSubmit} className=''>
              <div className="form-group mt-2">
                <label htmlFor="First Name" className="form-label">First Name</label>
                <input className="form-control" type="text" id='FirstName' placeholder='' value={formData.FirstName} onChange={handleChange} required />
                <p>{errors.FirstName}</p>
              </div>
              <div className="form-group mt-2">
                <label htmlFor="Last Name" className="form-label">Last Name</label>
                <input className="form-control" type="text" id='LastName' placeholder='' value={formData.LastName} onChange={handleChange} required />
                <p>{errors.LastName}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input className="form-control" type="email" id='email' placeholder='Example@gmail.com' value={formData.email} onChange={handleChange} required />
                <p>{errors.email}</p>
              </div>
              <div className="form-group mt-1 pb-4" id='btnTag'>
                <button className='btn btn-primary mt-4' type="submit">Login</button>
              </div>
            </form>
        </div>
    </>
  )
}

export default Profile