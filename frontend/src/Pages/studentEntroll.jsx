import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { student_entroll } from '../Services/studentService';
import { retrieveId } from '../Services/getToken';
import { useNavigate, useParams } from 'react-router-dom';
import { addTotalAmount } from '../Services/paymentService';
import { getServices } from '../Services/TrainingServices';

const StudentEntroll = () => {
  const navigate = useNavigate();
  const decodedToken = retrieveId();
  const [user_id, setUser_id] = useState('');

  useEffect(() => {
    if (decodedToken) {
      setUser_id(decodedToken.id);
      if (decodedToken.role === 'admin' || decodedToken.role === 'instructer') {
        navigate('/signin');
      }
    } else {
      setUser_id('');
    }
  }, [decodedToken]);

  const params  = useParams();
  const [formData, setFormData] = useState({
    phone_number: '',
    birth_date: '',
    nic_number: '',
    vechile_class: '',
    medical_date: '',
    medical_number: '',
    nic_soft_copy: null,
    medical_soft_copy: null,
    birth_certificate_soft_copy: null,
    id: ''
  });

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      id: user_id,
      vechile_class: params.vehicle_class
    }));
  }, [user_id]);

  const [errors, setErrors] = useState({});
  const [apiResponse, setApiResponse] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [submitTriggered, setSubmitTriggered] = useState(false);
  const [items, setItems] = useState([])

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    const get_services = async() => {
        try{
            const response = await getServices()
            setItems(response)
        }
        catch(error){
            console.log('error occure :', error)
        }
    }
    get_services()
},[formData.vechile_class])

useEffect(() => {
    const findAmount = (items) => {
        items.map((item) => { 
            if(item.service_class === formData.vechile_class){
                setTotalAmount(item.price)
            }
        })
    }
    findAmount(items)
}, [items])
console.log('tota :', totalAmount)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.phone_number.trim()) {
      errors.phone_number = 'Phone number is required';
    }
    if (!formData.birth_date.trim()) {
      errors.birth_date = 'Birth date is required';
    }
    if (!formData.nic_number.trim()) {
      errors.nic_number = 'NIC number is required';
    }
    if (!formData.medical_date.trim()) {
      errors.medical_date = 'Medical date is required';
    }
    if (!formData.medical_number.trim()) {
      errors.medical_number = 'Medical number is required';
    }
    if (!formData.nic_soft_copy) {
      errors.nic_soft_copy = 'NIC soft copy is required';
    }
    if (!formData.medical_soft_copy) {
      errors.medical_soft_copy = 'Medical soft copy is required';
    }
    if (!formData.birth_certificate_soft_copy) {
      errors.birth_certificate_soft_copy = 'Birth certificate soft copy is required';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitTriggered(true);

      const formDataToSend = new FormData();
      for (const key in formData) {
        console.log(key , formData[key])
        formDataToSend.append(key, formData[key]);
      }

      try {
        const response = await student_entroll(formDataToSend);
        setApiResponse('Signup successfully!');
        navigate('/verifymsg');

        const paymentResponse = await addTotalAmount(totalAmount, formData.id);
        console.log('Payment response:', paymentResponse);
        setApiResponse('ID added successfully!');

      } catch (error) {
        console.error('Error:', error);
        setApiResponse('An error occurred during the submission.');
      }
    } else {
      alert('Please fill all required fields.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row m-0 w-100" id='signupPage'>
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
            <h1 className='text-center mb-5'>Entroll here</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                    <input className="form-control" type="hidden" id='id' name='id' value={formData.id} />
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
    </>
  );
};

export default StudentEntroll;
