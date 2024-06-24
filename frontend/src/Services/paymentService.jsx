import axios from "axios";

const API_BASE_URL = 'http://localhost:4000/api'

export const addPaymentDetails = async (amount, id) => {
    const paidAmount = {
        paid : amount
    }
    console.log('paid :',paidAmount)

    try{
        const response = await axios.put(`${API_BASE_URL}/payment/addpayment/${id}`,paidAmount)
        console.log('ressss : ',response.data)
        return response
    }
    catch(error){
        console.log('error : ',error)
        throw error
    }
}
export const addBalancePaymentDetails = async (amount, id) => {
    const paidAmount = {
        paid : amount
    }
    console.log('paid :',paidAmount)

    try{
        const response = await axios.put(`${API_BASE_URL}/payment/addbalancepayment/${id}`,paidAmount)
        console.log('ressss : ',response.data)
        return response
    }
    catch(error){
        console.log('error : ',error)
    }
}

export const addTotalAmount = async (totalAmount, id) => {
    console.log('chech : ',totalAmount)
    const amount = {
        total_amount : totalAmount
    }

    try{
        const response = await axios.post(`${API_BASE_URL}/payment/addtotalamount/${id}`,amount)
        console.log('ressss : ',response.data)
        return response
    }
    catch(error){
        console.log('error : ',error)
        throw error
    }
}

export const showDetails = async (id) => {
    try{
        const response = await axios.get(`${API_BASE_URL}/payment/showdetails/${id}`)
        return response
    }
    catch(error){
        console.log('error : ',error)
        throw error
    }
}

export const showAllDetails = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/payment/showalldetails`)
        return response
    }
    catch(error){
        console.log('error : ',error)
        throw error
    }
}


export const examEligibleStudents = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/payment/exameligiblestudents`)
        return response.data
    }
    catch(error){
        console.log('error : ',error)
        throw error
    }
}

export const trialEligibleStudents = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/payment/trialeligiblestudents`)
        return response.data
    }
    catch(error){
        console.log('error : ',error)
        throw error
    }
}