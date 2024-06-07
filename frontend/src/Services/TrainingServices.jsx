import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api'

export const getServices = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/service/getservices`)
        return response.data

    }
    catch(error){
        throw error
    }
}