import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import postEvent from '../api/events'

import SocietyForm from '../components/SocietyForm'

function NewSocietyPage () {

    const [societyFormData, setSocietyFormData] = useState ({
        name: '',
        description: '',
        dangerLevel: '',
    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const body = societyFormData

        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/societies`, body)
            await postEvent(`A new society has emerged. You can now upvote for ${societyFormData.name}`, 'new_society')
            navigate('/societies')
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const fieldName = e.target.name

        setSocietyFormData({...societyFormData, [fieldName]: e.target.value})
    }

    return (
        <section id='new-society-page-section'>
            <SocietyForm formData={societyFormData} onSubmit={handleSubmit} onChange={handleChange}/>
        </section>
    )
    
}

export default NewSocietyPage