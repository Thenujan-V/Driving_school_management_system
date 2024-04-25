import React, { useState } from 'react';
import {visaLogo, mastercardLogo} from '../Components/Assets'
import { addPaymentDetails } from '../Services/paymentService';
import { retrieveId } from '../Services/getToken';
const Payment = () => {
    const uId = retrieveId()

    const [formData, setFormData] = useState({
        ownerName: '',
        cardNumber: '',
        date: '',
        cvv: ''
    });
    const [errors, setErrors] = useState({});
    const [cardType, setCardType] = useState(null);
    const[response, setResponse] = useState('')

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
                            <button type="submit" className="btn btn-warning mt-3">Pay Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
