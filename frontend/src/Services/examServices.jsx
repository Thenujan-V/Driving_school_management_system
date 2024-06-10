import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api'

export const show_exam_details = async (id) => {
    try{
        const response = await axios.get(`${API_BASE_URL}/exam/examdetails/${id}`)
    return response
    }
    catch(error){
        console.error('Error fetching exam details:', error);
        throw error 
    }
}

export const addExamDate = async (formData) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/exam/addexamdate`,formData)
        const exam_details = response.data[0]
        return exam_details
    }
    catch(error){
        console.error('Error:', error);
        throw error 
    }
}
export const show_exam_students = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/exam/studentsdetails`)
        return response.data
    }
    catch(error){
        console.error('Error:', error);
        throw error 
    }
}
export const update_result = async (examResult) => {
    console.log('eresu : ',examResult)
    try{
        const response = await axios.put(`${API_BASE_URL}/exam/result`,examResult)
        return response.data
    }
    catch(error){
        console.error('Error:', error);
        throw error 
    }
}