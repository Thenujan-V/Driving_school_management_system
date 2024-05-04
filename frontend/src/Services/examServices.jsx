import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api'

export const show_exam_details = async (id) => {
    try{
        const response = await axios.get(`${API_BASE_URL}/exam/examdetails/${id}`)
        const exam_details = response.data[0]
        return exam_details
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