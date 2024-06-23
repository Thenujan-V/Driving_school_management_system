import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api'

export const show_trial_details = async (id) => {
    try{
        const response = await axios.get(`${API_BASE_URL}/trial/trialdetails/${id}`)
        return response
    } 
    catch(error){
        console.error('Error fetching trial details:', error);
        throw error 
    }
}

export const show_all_trial_details = async (id) => {
    try{
        const response = await axios.get(`${API_BASE_URL}/trial/showAllStudents`)
        return response
    } 
    catch(error){
        console.error('Error fetching trial details:', error);
        throw error 
    }
}

export const addTrialDate = async (formData) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/trial/addtrialdate`,formData)
        const trial_details = response.data[0]
        return trial_details
    }
    catch(error){
        console.error('Error:', error);
        throw error 
    }
}
export const show_trial_students = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/trial/studentsdetails`)
        return response.data
    }
    catch(error){
        console.error('Error:', error);
        throw error 
    }
}
export const update_trial_result = async (trialResult) => {
    try{
        const response = await axios.put(`${API_BASE_URL}/trial/result`,trialResult)
        return response.data
    }
    catch(error){
        console.error('Error:', error);
        throw error 
    }
}