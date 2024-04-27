import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api'

export const student_entroll = async (formData) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/students/addDetails`, formData)
        console.log('fd : ',formData)
        return response.data

    }
    catch(error){
        console.log(error)
        throw error
    }
}

export const student_details = async (id) => {
    console.log('id :',id)
    try{
        const response = await axios.get(`${API_BASE_URL}/students/studentdetails/${id}`)
        return response.data[0]
    }
    catch(error){
        console.error('Error fetching student details:', error);

        throw error 
    }
}