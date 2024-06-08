import React, { useEffect, useState } from 'react';
import {visaLogo, mastercardLogo} from '../Components/Assets'
import { addPaymentDetails, addBalancePaymentDetails } from '../Services/paymentService';
import { retrieveId } from '../Services/getToken';
import { student_details, student_details_update } from '../Services/studentService';
import { show_exam_details } from '../Services/examServices';
import { useNavigate } from 'react-router-dom';
import { getServices } from '../Services/TrainingServices';
import { updateUserProfile } from '../Services/userService';

const Payment = () => {
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
    
    const [errors, setErrors] = useState({});
    const [cardType, setCardType] = useState(null);
    const[response, setResponse] = useState('')
    const[vechileClass, setVechileClass] = useState('')
    const [courseAmount, setCourseAmount] = useState('')
    const [examResult, setExamResult] = useState('')
    const [items, setItems] = useState([])

    const [formData, setFormData] = useState({
        ownerName: '',
        cardNumber: '',
        date: '',
        cvv: ''        
    });

    const cardTypes = {
        Visa: /^4/,
        Mastercard: /^5[1-5]/,
    };

    const determineCardType = (cardNumber) => {
        for (const type in cardTypes) {
            if (cardTypes[type].test(cardNumber)) {
                return type;
            }
        }
        return null;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'cardNumber') {
            const type = determineCardType(value);
            setCardType(type);
        }
    };

    useEffect(() => {
        const vechile_class = async(user_id) => {
        try{
            const response = await student_details(user_id)
            setVechileClass(response.data.vechile_class)
        }
        catch(error){
            console.log('error :',error)
            setVechileClass(error)
        }   
    }
    vechile_class(user_id)
    
    
    const get_exam_result = async(user_id) => {
        try{
            const response = await show_exam_details(user_id)
            setExamResult(response)
        }
        catch(error){
            console.log('error :',error)
            setVechileClass(error)
        }
    }
    get_exam_result(user_id)
    },[user_id])


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
    },[vechileClass])

    useEffect(() => {
        const findAmount = (items) => {
            items.map((item) => { 
                if(item.service_class === vechileClass){
                    setCourseAmount(item.price)
                }
            })
        }
        findAmount(items)
    }, [items])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};

        if (!formData.ownerName.trim()) {
            errors.ownerName = 'Name is required';
        }
        if (!formData.cardNumber.trim()) {
            errors.cardNumber = 'Card number is required';
        }
        if (!formData.date.trim()) {
            errors.date = 'Expire date is required';
        }
        if (!formData.cvv.trim()) {
            errors.cvv = 'CVV is required';
        }

        setErrors(errors);

        if(Object.keys(errors).length === 0){
            console.log('okey')

            if (typeof examResult === 'undefined'){
                try{
                    const advanceAmount = courseAmount * 0.25
                    const paymentDetails = await addPaymentDetails(advanceAmount, user_id)
                    setResponse('add successfully')
                    alert('payment successfully')
                    navigate('/')
                }
                catch(error){
                    console.log('error : ',error)
                    setResponse('error')
                }
            }
            else{
                try{
                    const balanceAmount = courseAmount * 0.75
                    const paymentDetails = await addBalancePaymentDetails(balanceAmount, user_id)
                    console.log('balance : ',formData.balanceAmount)
                    console.log('add success')
                    setResponse('add successfully')
                    alert('payment successfully')
                    navigate('/')
                }
                catch(error){
                    console.log('error : ',error)
                    setResponse('error')
                }
            }
        }
    };

console.log('cord :', examResult)
    return (
        <div id='payment'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" id='paymentImg'></div>
                    <div className="col-lg-6" id='paymentDetails'>
                        <h1>Payment Details</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Cardholder Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="ownerName"
                                    id="name"
                                    placeholder="Johnsan"
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                />
                                <p className="text-danger">{errors.ownerName}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="num" className="form-label">Card Number</label>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="cardNumber"
                                        id="num"
                                        placeholder="xxxx xxxx xxxx xxxx"
                                        value={formData.cardNumber}
                                        onChange={handleChange}
                                    />
                                    {/* Display the card logo based on card type */}
                                    {cardType === 'Visa' && <img src={visaLogo} alt="Visa" style={{ width: '40px', height: '25px', marginLeft: '10px' }} />}
                                    {cardType === 'Mastercard' && <img src={mastercardLogo} alt="Mastercard" style={{ width: '40px', height: '25px', marginLeft: '10px' }} />}
                                </div>
                                <p className="text-danger">{errors.cardNumber}</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Expiration Date</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="date"
                                            id="name"
                                            placeholder="12/27"
                                            value={formData.date}
                                            onChange={handleChange}
                                        />
                                        <p className="text-danger">{errors.date}</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">CVV</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="cvv"
                                            id="name"
                                            placeholder="xxx"
                                            value={formData.cvv}
                                            onChange={handleChange}
                                        />
                                        <p className="text-danger">{errors.cvv}</p>
                                    </div>
                                </div>
                            </div>
                            {examResult === 0 || !examResult ?
                                <button type="submit" className="btn btn-warning mt-3" id='examPay'>Pay Now {courseAmount*0.25} LKR</button> : 
                                <button type="submit" className="btn btn-warning mt-3" id='trialPay'>Pay Now {courseAmount*0.75} LKR</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
