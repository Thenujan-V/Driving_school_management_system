import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api'

export const review_add = async (formData) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/review/addreview`, formData)
        return response.data
    }
    catch(error){
        throw error
    }
}

export const get_review = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/review/getreview`)
        return response
    }
    catch(error){
        throw error
    }
}