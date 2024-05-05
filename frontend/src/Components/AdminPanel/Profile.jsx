import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { retrieveId } from '../../Services/getToken'
import { updateUserProfile, userDetails } from '../../Services/userService'

const Profile = () => {
    const id = retrieveId()
    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        email:''
    })
    const [apiDetailsGetResponse, setApiDetailsGetResponse] = useState('')
    const [updateApiResponse, setUpdateApiResponse] = useState('')
    const [errors, setErrors] = useState('')

    useEffect(() => {
      const getuser = async (id) => {
        try{
          const userDetailsResponse = await userDetails(id)
          console.log(userDetailsResponse)
          setApiDetailsGetResponse(userDetailsResponse)
        }
        catch(error){
          console.log('error :',error)
          setApiDetailsGetResponse('did not get the user details')
        }
      }
      getuser(id)
    },[])
    useEffect(() => {
      if (apiDetailsGetResponse) {
          setFormData({
              first_name: apiDetailsGetResponse.first_name,
              last_name: apiDetailsGetResponse.last_name,
              email: apiDetailsGetResponse.email,
          });
      }
     }, [apiDetailsGetResponse]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        if (!formData.first_name.trim()) {
            errors.first_name = 'First name is required';
        }
        if (!formData.last_name.trim()) {
            errors.last_name = 'Last name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        }

        setErrors(errors);
        try{
            if(Object.keys(errors).length === 0){
                const response = await updateUserProfile(formData,id)
                setUpdateApiResponse('signup successfully...!')
                // navigate('/signin')
            }
            else{
                alert('Give correct details')
            }
        
        }
        catch(error){
            console.log('Response : ',error.response.data)
            setUpdateApiResponse('Sign up failed.');
            if(error.response.data == 'exsisting email'){
                alert('email is already used please use different email')
            }
            console.error('Error:', error);
          }

    }
  return (
    <div style={{display:'flex', Height:'90vh'}}>
        <AdminVerticalNav />
        <div className='container user-profile' style={{flex:'1', height:'100vh'}}>
            <h1>Your profile</h1>
            <div className='profile'>
            <div className='pic'>
                <p>{formData.first_name.charAt(0).toUpperCase()}</p>
            </div>
            <form onSubmit={handleSubmit} className='form mt-3'>
              <div className="form-group mt-2">
                <label htmlFor="First Name" className="form-label">First Name -</label>
                <input className="form-control" type="text" id='first_name' name="first_name" value={formData.first_name} onChange={handleChange}  />
                <p>{errors.first_name}</p>
              </div>
              <div className="form-group mt-2">
                <label htmlFor="Last Name" className="form-label">Last Name -</label>
                <input className="form-control" type="text" id='last_name' name="last_name" value={formData.last_name} onChange={handleChange}  />
                <p>{errors.last_name}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email -</label>
                <input className="form-control" type="email" id='email' name="email" value={formData.email} onChange={handleChange}  />
                <p>{errors.email}</p>
              </div>
              <div className="form-group mt-5 pb-4" id='btnTag'>
                <button className='btn btn-primary mt-4' type="submit">Save</button>
              </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Profile

