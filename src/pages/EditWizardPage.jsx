import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

import WizardForm from "../components/WizardForm"

function EditWizardPage() {

    const { wizardId } = useParams()
    const navigate = useNavigate()

    const [wizardFormData, setWizardFormData] = useState(null)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/wizards/${wizardId}`)
            .then(response => {
                const data = response.data
                setWizardFormData({
                    ...data,
                    house: data.house?.toLowerCase() || '',
                    specialty: data.specialty?.toLowerCase() || '',
                })
            })
            .catch(error => console.log(error))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${import.meta.env.VITE_SERVER_URL}/wizards/${wizardId}`, wizardFormData)
            navigate('/wizards')
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const fieldName = e.target.name

        if (fieldName.includes('.')) {
            const nestedObject = fieldName.split('.')[0]
            const nestedObjectKey = fieldName.split('.')[1]
            setWizardFormData({ ...wizardFormData, [nestedObject]: { ...wizardFormData[nestedObject], [nestedObjectKey]: e.target.value } })
        } else {
            setWizardFormData({ ...wizardFormData, [fieldName]: e.target.value })
        }
    }

    const handleDelete = async() => {
        try {
            await axios.delete(`${import.meta.env.VITE_SERVER_URL}/wizards/${wizardId}`)
            navigate('/wizards')
        } catch (error) {
            console.log(error)
        }
    }

    if (!wizardFormData) return <h3>Loading...</h3>

    return (
        <section id="new-wizard-page-section">
            <WizardForm 
                formData={wizardFormData}
                onSubmit={handleSubmit}
                onChange={handleChange}
                onDelete={handleDelete}
                isEditing={true}
                onClose={() => navigate(-1)}
            />
        </section>
    )
}

export default EditWizardPage
