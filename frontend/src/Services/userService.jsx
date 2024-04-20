import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api'

export const signupService = async (formData) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/customers/register`, formData)
        console.log(response.data)
        return response.data
    }
    catch(err){
        throw err
    }
}
export const signinService = async (email, password) => {
    try{
        const requestData = {
            email : email,
            password : password
        }
       
        const response = await axios.post(`${API_BASE_URL}/customers/login`, requestData)
        console.log(response.data)
        return response.data
    }
    catch(error){
        throw error
        
    }
}
export const userDetails = async (id) => {
    console.log(id)
    try{
        const response = await axios.get(`${API_BASE_URL}/customers/userdetails/${id}`)
        return response.data[0]
    }
    catch(error){
        throw(error)
    }
}