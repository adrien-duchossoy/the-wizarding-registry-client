
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Homepage () {

    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData() 
    },[])

    const getData = async () => {
        try {
            const responseEvents = await axios.get(`${import.meta.env.VITE_SERVER_URL}/events`)
            setEvents(responseEvents.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
            setIsLoading(false)
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        
        <section>
            {events.map((event) => {
                return(
                    <div>
                        <p>{event.message}</p>
                    </div>
                )
            })}
            
        </section>
    )
}

export default Homepage