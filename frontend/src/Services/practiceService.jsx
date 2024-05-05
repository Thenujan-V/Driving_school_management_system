import axios from "axios";

const API_BASE_URL = 'http://localhost:4000/api'


export const get_times = async (id, first_name) => {
    console.log('baccc :',id)
    try{
        const response = await axios.get(`${API_BASE_URL}/time/showtime/${id}/${first_name}`)
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
export const updateAttendance = async (tId) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/time/attendance/${tId}`)
        return response.data
    }
    catch(error){
        console.log('error :', error)
        throw error
    }
}