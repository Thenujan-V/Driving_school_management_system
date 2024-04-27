import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { SignupStyle } from '../Components/Styles'
import {student_entroll} from '../Services/studentService'
import {retrieveId} from '../Services/getToken'
import { useNavigate, useParams } from 'react-router-dom'

const StudentEntroll = () => {
  const navigate = useNavigate();
  const id = retrieveId()
  const {index} = useParams()
  console.log('insex : ',index)

  const [formData, setFormData] = useState({
    phone_number: '',
    birth_date: '',
    nic_number: '',
    vechile_class: index,
    medical_date: '',
    medical_number: '',
    nic_soft_copy: '',
    medical_soft_copy: '',
    birth_certificate_soft_copy: '',
    id:id
  });
  const [errors, setErrors] = useState({});
  const [apiResponse, setApiResponse] = useState('');

  const handleChange = (e) => {
      // const { name, files, type, value } = e.target;

      // if (type === 'file') {
      //     const file = files[0];
      //     const newFormData = new FormData();
      //     newFormData.append(name, file);
      //     setFormData(newFormData);
      // } else {
      //     setFormData({ ...formData, [name]: value });
      // }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.phone_number.trim()) {
      errors.phone_number = 'First name is required';
    }
    if (!formData.birth_date.trim()) {
      errors.birth_date = 'Last name is required';
    }
    if (!formData.nic_number.trim()) {
      errors.nic_number = 'nic_number is required';
    } 
    // if (!formData.vechile_class.trim()) {
    //   errors.vechile_class = 'vechile_class is required';
    // }
    if (!formData.medical_date.trim()) {
      errors.medical_date = 'medical_date is required';
    }
    if (!formData.medical_number.trim()) {
      errors.medical_number = 'medical_number is required';
    }
    if (!formData.nic_soft_copy.trim()) {
      errors.nic_soft_copy = 'nic_soft_copy is required';
    }
    if (!formData.medical_soft_copy.trim()) {
      errors.medical_soft_copy = 'medical_soft_copy is required';
    }
    if (!formData.birth_certificate_soft_copy.trim()) {
      errors.birth_certificate_soft_copy = 'birth_certificate_soft_copy is required';
    }


    setErrors(errors);

    // api call throw signup service function
    try{
      if(Object.keys(errors).length === 0){
        const response = await student_entroll(formData)
        setApiResponse('signup successfully...!')
        navigate('/verifymsg')
      }
      else{
        alert('fill all details')
      }
    }
    catch(error){
      alert('some problem try again')
      setApiResponse('Sign up failed.');
    }


  };
  return (
    <div className="container-fluid">
    <div className="row m-0 w-100" id='signupPage'>
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
            <h1 className='text-center mb-5'>Entroll here</h1>
            <form onSubmit={handleSubmit}>
                {/* Pair of form fields */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="phone_number" className="form-label">Phone Number</label>
                            <input className="form-control" type="text" id='phone_number' name='phone_number' placeholder='Phone Number' value={formData.phone_number} onChange={handleChange} />
                            <p>{errors.phone_number}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="birth_date" className="form-label">Birth Date</label>
                            <input className="form-control" type="date" id='birth_date' name='birth_date' placeholder='Birth Date' value={formData.birth_date} onChange={handleChange} />
                            <p>{errors.birth_date}</p>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="nic_number" className="form-label">NIC Number</label>
                            <input className="form-control" type="text" id='nic_number' name='nic_number' placeholder='NIC Number' value={formData.nic_number} onChange={handleChange} />
                            <p>{errors.nic_number}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="medical_number" className="form-label">Medical Number</label>
                            <input className="form-control" type="text" id='medical_number' name='medical_number' placeholder='Medical Number' value={formData.medical_number} onChange={handleChange} />
                            <p>{errors.medical_number}</p>
                        </div>
                    </div>
                </div>
                {/* <div className="form-group mb-3">
                    <label htmlFor="vechile_class" className="form-label">vechile class</label>
                    <input className="form-control" type="text" id='vechile_class' name='vechile_class' placeholder='Vechile class' onChange={handleChange} />
                    <p>{errors.vechile_class}</p>
                </div> */}
                {/* File inputs */}

                <div className="row mb-3">
                  <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="medical_date" className="form-label">Medical Date</label>
                        <input className="form-control" type="date" id='medical_date' name='medical_date' placeholder='Medical Date' value={formData.medical_date} onChange={handleChange} />
                        <p>{errors.medical_date}</p>
                      </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="birth_certificate_soft_copy" className="form-label">Birth Certificate Soft Copy</label>
                      <input className="form-control" type="file" id='birth_certificate_soft_copy' name='birth_certificate_soft_copy' onChange={handleChange} />
                      <p>{errors.birth_certificate_soft_copy}</p>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="nic_soft_copy" className="form-label">NIC Soft Copy</label>
                      <input className="form-control" type="file" id='nic_soft_copy' name='nic_soft_copy' onChange={handleChange} />
                      <p>{errors.nic_soft_copy}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="medical_soft_copy" className="form-label">Medical Soft Copy</label>
                      <input className="form-control" type="file" id='medical_soft_copy' name='medical_soft_copy' onChange={handleChange} />
                      <p>{errors.medical_soft_copy}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input className="form-control" type="hidden" id='id' name='id' value={formData.id}  />
                    </div>
                  </div>
                </div>
                
                <div className="form-group mt-4">
                    <button className='btn btn-primary' type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>


  )
}

export default StudentEntroll