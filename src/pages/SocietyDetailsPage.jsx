
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'


function SocietyDetailsPage () {

    const navigate = useNavigate()
    const {societyId} = useParams()

    const [society, setSociety] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/societies/${societyId}`)
            setSociety(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoading) return <h3>Loading...</h3>

    return(
        <div>
            <h1>{society.name}</h1>
            <Link to={`/wizards/allwizards`}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default SocietyDetailsPage