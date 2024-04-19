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