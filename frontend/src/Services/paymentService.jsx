import axios from "axios";

const API_BASE_URL = 'http://localhost:4000/api'

export const addPaymentDetails = async (formData, id) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/payment/addpayment/${id}`,formData)
        console.log('ressss : ',response.data)
        return response
    }
    catch(error){
        console.log('error : ',error)
        throw error
    }
}