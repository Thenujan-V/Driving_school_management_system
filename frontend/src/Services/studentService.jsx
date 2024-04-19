import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api'

export const student_entroll = async (formData) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/students/addDetails`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        console.log('fd : ',formData)
        return response.data

    }
    catch(error){
        console.log(error)
        throw error
    }
}