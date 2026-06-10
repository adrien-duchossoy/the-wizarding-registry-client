
import axios from 'axios'

const postEvent = async(message, type) => {
    const body = {
        message,
        type
    }

    try {
        await axios.post(`${import.meta.env.VITE_SERVER_URL}/events`, body)
        
    } catch (error) {
        console.log(error)
    }
}

export default postEvent