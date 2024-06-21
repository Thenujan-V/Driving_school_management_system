import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { retrieveId } from '../../Services/getToken'
import { updateUserProfile, userDetails } from '../../Services/userService'
import { useNavigate } from 'react-router-dom'
import { workersDetails } from '../../Services/adminService'

const Profile = () => {
  const navigate = useNavigate();
  const decodedToken = retrieveId()
  const [user_id, setUser_id] = useState('')

  useEffect(() => {
      if(decodedToken){
          setUser_id(decodedToken.id)
  
          if(decodedToken.role === 'user' || decodedToken.role === 'instructor'){
              navigate('/signin')
          }
      }
      else{
          setUser_id('')
      }
  },[decodedToken])
  
  const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        phone_number:''
    })
    const [apiDetailsGetResponse, setApiDetailsGetResponse] = useState('')
    const [updateApiResponse, setUpdateApiResponse] = useState('')
    const [errors, setErrors] = useState('')

    useEffect(() => {
      const getuser = async (user_id) => {
        try{
          const userDetailsResponse = await workersDetails(user_id)
          console.log('uuuuu :',userDetailsResponse)
          setApiDetailsGetResponse(userDetailsResponse)
        }
        catch(error){
          console.log('error :',error)
          setApiDetailsGetResponse('did not get the user details')
        }
      }
      getuser(user_id)
    },[user_id])
    useEffect(() => {
      if (apiDetailsGetResponse) {
          setFormData({
              first_name: apiDetailsGetResponse.first_name,
              last_name: apiDetailsGetResponse.last_name,
              phone_number: apiDetailsGetResponse.phone_number,
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
        if (!formData.phone_number.trim()) {
            errors.phone_number = 'phone_number is required';
        }

        setErrors(errors);
        try{
            if(Object.keys(errors).length === 0){
                const response = await updateUserProfile(formData,user_id)
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
            if(error.response.data == 'exsisting phone_number'){
                alert('phone_number is already used please use different phone_number')
            }
            console.error('Error:', error);
          }

    }
  return (
        <div className='container user-profile' style={{minHeight:'120vh',  backgroundColor:'var(--green)'}}>
            <h1>Your profile</h1>
            <div className='profile'>
            <div className='pic'>
                <p>{formData.first_name && formData.first_name.charAt(0).toUpperCase()}</p>
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
                <label htmlFor="phone_number" className="form-label">Mobile -</label>
                <input className="form-control" type="phone_number" id='phone_number' name="phone_number" value={formData.phone_number} onChange={handleChange}  />
                <p>{errors.phone_number}</p>
              </div>
              <div className="form-group mt-5 pb-4" id='btnTag'>
                <button className='btn btn-primary mt-4' type="submit">Save</button>
              </div>
            </form>
            </div>
        </div>
  )
}

export default Profile

