import axios from "axios";

const API_BASE_URL = 'http://localhost:4000/api'


export const get_times = async (id) => {
    try{
        const response = await axios.get(`${API_BASE_URL}/time/showtime/${id}`)
        const time = response.data
        console.log(time)
        return time
    }
    catch(error){
        console.error('Error fetching exam details:', error);

        throw error 
    }
}
export const assignDateTime = async (formData) => {
    try{
        console.log('fd :',formData)
        const response = await axios.post(`${API_BASE_URL}/time/addtime`,formData)
        return response.data
    }
    catch(error){
        console.log('error :', error)
        throw error
    }
} 