import { jwtDecode } from 'jwt-decode';
export const getToken = () => {
    try{
        const token = localStorage.getItem("authToken")   
        return token
    }
    catch(error){
        console.log('Error getting token: ', error)
        return null
    }
} 

export const retrieveId = () => {
    try{
        const token = localStorage.getItem("authToken")   
        const decodedToken = jwtDecode(token)
        const id = decodedToken.id
        return id
    }
    catch(error){
        console.log('Error getting token: ', error)
        throw error
    }
}
