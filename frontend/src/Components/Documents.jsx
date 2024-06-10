import React, { useEffect, useState } from 'react'
import { documents } from './Styles'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { retrieveId } from '../Services/getToken';
import { student_entroll, student_details, student_details_update } from '../Services/studentService';

const Documents = () => {
    
    
      const navigate = useNavigate();
      const decodedToken = retrieveId()
      const [user_id, setUser_id] = useState('')

      useEffect(() => {
          if(decodedToken){
              setUser_id(decodedToken.id)
      
              if(decodedToken.role === 'admin' || decodedToken.role === 'instructor'){
                  navigate('/signin')
              }
          }
          else{
              setUser_id('')
          }
      },[decodedToken])
      const {index} = useParams()
    
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
        id:''
      });

      useEffect(() => {
        formData.id = user_id
      },[user_id])
      
      const [errors, setErrors] = useState({});
      const [apiResponse, setApiResponse] = useState('');
      const [totalAmount, setTotalAmount] = useState('')
      const [submitTriggered, setSubmitTriggered] = useState(false);
      const [documentsResponse, setDocumentsResponse] = useState('')
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      useEffect(() => {
        
      })

      // useEffect(() => {
      //   if (formData.vechile_class) {
      //       const vechileClassIndex = parseInt(formData.vechile_class, 10);
      //       const selectedItem = items.find((item, index) => index === vechileClassIndex);
      //       if (selectedItem) {
      //           setTotalAmount(selectedItem.price);
      //       }
      //   }
      //   }, [formData.vechile_class, items]);

        useEffect(() => {
            const fetchStudentsDocuments = async (user_id) => {
                try{
                    const responseDocuments = await student_details(user_id)
                    setDocumentsResponse(responseDocuments.data)
                }
                catch(error){
                    console.log(error)
                    setDocumentsResponse("can't get datas")
                }
            }
            fetchStudentsDocuments(user_id)
        },[user_id])
        
        useEffect(() => {
            if(documentsResponse){
                setFormData({
                    phone_number:documentsResponse.phone_number,
                    birth_date:documentsResponse.birth_date,
                    nic_number: documentsResponse.nic_number,
                    medical_date: documentsResponse.medical_date,
                    medical_number: documentsResponse.medical_number,
                    vechile_class: documentsResponse.vechile_class,
                    nic_soft_copy: documentsResponse.nic_soft_copy_url,
                    medical_soft_copy: documentsResponse.medical_soft_copy_url,
                    birth_certificate_soft_copy: documentsResponse.birth_certificate_soft_copy_url,
            })
            }
        },[documentsResponse])

      const handleSubmit = async (e) => {

        e.preventDefault();
        const errors = {};

        if (!formData.phone_number) {
          errors.phone_number = 'First name is required';
        }
        if (!formData.birth_date) {
          errors.birth_date = 'Last name is required';
        }
        if (!formData.nic_number) {
          errors.nic_number = 'nic_number is required';
        } 
        if (!formData.medical_date) {
          errors.medical_date = 'medical_date is required';
        }
        if (!formData.medical_number) {
          errors.medical_number = 'medical_number is required';
        }
        if (!formData.nic_soft_copy) {
          errors.nic_soft_copy = 'nic_soft_copy is required';
        }
        if (!formData.medical_soft_copy) {
          errors.medical_soft_copy = 'medical_soft_copy is required';
        }
        if (!formData.birth_certificate_soft_copy) {
          errors.birth_certificate_soft_copy = 'birth_certificate_soft_copy is required';
        }
    
    
        setErrors(errors);
    
        if (Object.keys(errors).length === 0) {
          setSubmitTriggered(true);
          
          try {
            console.log('fdd : ',formData)
              const response = await student_details_update(formData, user_id);
              setApiResponse('Signup successfully!');
          } 
          catch (error) {
              console.error('Error:', error);
              setApiResponse('An error occurred during the submission.');
          }
        } 
        else {
          alert('Please fill all required fields.');
        }
      };
  return (
    <div className='container userDocuments'>
        <h1>Students Documents</h1>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="phone_number" className="form-label">Phone Number</label>
                            <input className="form-control" type="text" id='phone_number' name='phone_number' value={formData.phone_number} onChange={handleChange} />
                            <p>{errors.phone_number}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="birth_date" className="form-label">Birth Date</label>
                            <input className="form-control" type="date" id='birth_date' name='birth_date' value={formData.birth_date} onChange={handleChange} />
                            <p>{errors.birth_date}</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="nic_number" className="form-label">NIC Number</label>
                            <input className="form-control" type="text" id='nic_number' name='nic_number' value={formData.nic_number} onChange={handleChange} />
                            <p>{errors.nic_number}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="medical_number" className="form-label">Medical Number</label>
                            <input className="form-control" type="text" id='medical_number' name='medical_number' value={formData.medical_number} onChange={handleChange} />
                            <p>{errors.medical_number}</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <div className="form-group mb-3">
                            <label htmlFor="vechile_class" className="form-label">vechile class</label>
                            <input className="form-control" type="text" id='vechile_class'  value={formData.vechile_class} onChange={handleChange} />
                            <p>{errors.vechile_class}</p>
                        </div> 
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="medical_date" className="form-label">Medical Date</label>
                            <input className="form-control" type="date" id='medical_date' name='medical_date' value={formData.medical_date} onChange={handleChange} />
                            <p>{errors.medical_date}</p>
                        </div>
                    </div>
                    
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="form-group mb-3">
                      <label htmlFor="nic_soft_copy" className="form-label">NIC Soft Copy</label>
                      <iframe src={`http://localhost:4000/${formData.nic_soft_copy}`} title="NIC Soft Copy" width="100%" height="300"></iframe>
                      <p>{errors.nic_soft_copy}</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-3">
                      <label htmlFor="medical_soft_copy" className="form-label">Medical Soft Copy</label>
                      <iframe src={`http://localhost:4000/${formData.medical_soft_copy}`} title="Medical Soft Copy" width="100%" height="300"></iframe>
                      <p>{errors.medical_soft_copy}</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                        <div className="form-group mb-3">
                        <label htmlFor="birth_certificate_soft_copy" className="form-label">Birth Certificate Soft Copy</label>
                        <iframe src={`http://localhost:4000/${formData.birth_certificate_soft_copy}`} title="Birth Certificate Soft Copy" width="100%" height="300"></iframe>
                        <p>{errors.birth_certificate_soft_copy}</p>
                        </div>
                    </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input className="form-control" type="hidden" id='id' name='id' value={formData.id}  />
                    </div>
                  </div>
                </div> 
            </form>
        </div>
    </div>
  )
}

export default Documents