import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api'

export const show_trial_details = async (id) => {
    try{
        const response = await axios.get(`${API_BASE_URL}/trial/trialdetails/${id}`)
        return response.data[0]
    } 
    catch(error){
        console.error('Error fetching exam details:', error);
        throw error 
    }
}

