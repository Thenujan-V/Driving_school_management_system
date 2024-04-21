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