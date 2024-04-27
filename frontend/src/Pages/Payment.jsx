import React, { useEffect, useState } from 'react';
import {visaLogo, mastercardLogo} from '../Components/Assets'
import { addPaymentDetails } from '../Services/paymentService';
import { retrieveId } from '../Services/getToken';
import { student_details } from '../Services/studentService';
import { show_exam_details } from '../Services/examServices';

const Payment = () => {

    const items = [
        {url:'1', title: 'Item 1', description: 'Description for item 1',price:'1500', newprice:'7200' },
        {url:'2', title: 'Item 1', description: 'Description for item 1',price:'2500', newprice:'7200' },
        {url:'3', title: 'Item 1', description: 'Description for item 1',price:'3500', newprice:'7200' },
        {url:'4', title: 'Item 1', description: 'Description for item 1',price:'4500', newprice:'7200' }    
      ];

    const uId = retrieveId()
      console.log(uId)
    const [formData, setFormData] = useState({
        ownerName: '',
        cardNumber: '',
        date: '',
        cvv: ''
    });
    const [errors, setErrors] = useState({});
    const [cardType, setCardType] = useState(null);
    const[response, setResponse] = useState('')
    const[vechileClass, setVechileClass] = useState('')
    const [courseAmount, setCourseAmount] = useState('')
    const [examResult, setExamResult] = useState('')

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
        try{
            const paymentDetails = await addPaymentDetails(formData, uId)
            console.log('add success')
            setResponse('add successfully')
        }
        catch(error){
            console.log('error : ',error)
            setResponse('error')
        }
    };

    useEffect(() => {
        const vechile_class = async(uId) => {
        try{
            const response = await student_details(uId)
            setVechileClass(response.vechile_class)
        }
        catch(error){
            console.log('error :',error)
            setVechileClass(error)
        }   
    }

    const get_amount = (vechileClass) => {
        console.log('class :',vechileClass)

        items.map((item, index) => {        
            if(index == vechileClass){
                setCourseAmount(item.price)
            }
        })
    }
    const get_exam_result = async(uId) => {
        try{
            const response = await show_exam_details(uId)
            console.log('result :',response.result)
            setExamResult(response.result)
        }
        catch(error){
            console.log('error :',error)
            setVechileClass(error)
        }
    }
    vechile_class(uId)
    get_exam_result(uId)
    get_amount(vechileClass)
    })

    const trialPayment = document.getElementById('trialPay')
    const examPayment = document.getElementById('examPay')

    if(examResult == 0){
        examPayment.style.display = 'block'
        trialPayment.style.display = 'none'
     }
    else{
        trialPayment.style.display = 'block'
        examPayment.style.display = 'none'

    }

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
                            <button type="submit" className="btn btn-warning mt-3" id='examPay'>Pay Now {courseAmount*0.4} LKR</button>
                            <button type="submit" className="btn btn-warning mt-3" id='trialPay'>Pay Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
