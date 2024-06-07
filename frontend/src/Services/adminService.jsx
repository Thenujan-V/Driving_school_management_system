import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api'

export const signupService = async (formData) => {
    console.log('formdata :',formData)
    try{
        const response = await axios.post(`${API_BASE_URL}/admin/register`, formData)
        console.log(response.data)
        return response.data
    }
    catch(err){
        throw err
    }
}
export const adminSignin = async (phone_no, password) => {
    try{
        const requestData = {
            phone_no : phone_no,
            password : password
        }
       
        const response = await axios.post(`${API_BASE_URL}/admin/workersignin`, requestData)
        return response.data
    }
    catch(error){
        throw error
        
    }
}
export const showAllAdmins = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/admin/getadmins`)
        return response.data
    }
    catch(error){
        throw error
    }
}
export const showAllInstructers = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/admin/getinstructers`)
        return response.data
    }
    catch(error){
        throw error
    }
}