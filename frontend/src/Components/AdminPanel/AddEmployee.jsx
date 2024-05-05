import React, { useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { signupService } from '../../Services/adminService'
import { useNavigate } from 'react-router-dom'

const AddEmployee = () => {
  const navigate = useNavigate()
    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        phone_no:'',
        NIC_no:'',
        role:'',
        password:'',
        confirmPassword:''
    })
    const [errors, setErrors] = useState('')
    const [updateApiResponse, setUpdateApiResponse] = useState('')
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        // if (!formData.first_name.trim()) {
        //     errors.first_name = 'First name is required';
        // }
        // if (!formData.last_name.trim()) {
        //     errors.last_name = 'Last name is required';
        // }
        // if (!formData.email.trim()) {
        //     errors.email = 'Email is required';
        // }
        // if (!formData.phone_no.trim()) {
        //     errors.phone_no = 'phone number is required';
        // }
        // if (!formData.NIC_no.trim()) {
        //     errors.NIC_no = 'NIC number is required';
        // }
        // if (!formData.role.trim()) {
        //     errors.role = 'role is required';
        // }
        // if (!formData.password.trim()) {
        //     errors.password = 'password is required';
        // }
        // if (!formData.confirmPassword.trim()) {
        //     errors.confirmPassword = 'confirm Password is required';
        // }
        // if (formData.password.trim() !== formData.confirmPassword.trim() ) {
        //     errors.confirmPassword = 'passwords not match';
        // }


        setErrors(errors);
        try{
            if(Object.keys(errors).length === 0){
                const response = await signupService(formData)
                setUpdateApiResponse('signup successfully...!')
                alert('signin successfully')
                window.location.reload();
            }
            else{
                alert('Give correct details')
            }
        
        }
        catch(error){
            console.log('Response : ',error.response.data)
            // setUpdateApiResponse('Sign up failed.');
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
            <div className='profile w-75 p-0'>
            <form onSubmit={handleSubmit} className='form mt-3'>
              <div className="form-group mt-2">
                <label htmlFor="First Name" className="form-label w-50">First Name -</label>
                <input className="form-control" type="text" id='first_name' name="first_name" value={formData.first_name} onChange={handleChange}  required/>
                <p>{errors.first_name}</p>
              </div>
              <div className="form-group mt-2">
                <label htmlFor="Last Name" className="form-label w-50">Last Name -</label>
                <input className="form-control" type="text" id='last_name' name="last_name" value={formData.last_name} onChange={handleChange}  required/>
                <p>{errors.last_name}</p>
              </div>
              <div className="form-group">
                <label htmlFor="phone_no" className="form-label w-50">Phone Number -</label>
                <input className="form-control" type="text" id='phone_no' name="phone_no" value={formData.phone_no} onChange={handleChange}  required/>
                <p>{errors.phone_no}</p>
              </div>
              <div className="form-group">
                <label htmlFor="NIC_no" className="form-label w-50">NIC number -</label>
                <input className="form-control" type="text" id='NIC_no' name="NIC_no" value={formData.NIC_no} onChange={handleChange}  required/>
                <p>{errors.NIC_no}</p>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label w-50">Password -</label>
                <input className="form-control" type="password" id='password' name="password" value={formData.password} onChange={handleChange} required />
                <p>{errors.password}</p>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label w-50">Confirmation Password -</label>
                <input className="form-control" type="password" id='confirmPassword' name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                <p>{errors.confirmPassword}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label w-50">Role -</label>
                {/* <input className="form-control" type="text" id='role' name="role" value={formData.role} onChange={handleChange}  /> */}
                
                    <select
                        className="form-control dropdown-select"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        style={{backgroundColor:'transparent', border:'none'}}
                        required
                    >
                        <option value="">Select Role (admin / instructor)</option>
                        <option value="admin">Admin</option>
                        <option value="instructor">Instructor</option>
                    </select>
                <p>{errors.role}</p>
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

export default AddEmployee