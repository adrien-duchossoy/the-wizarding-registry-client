import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import postEvent from "../api/events"

import WizardForm from "../components/WizardForm"
import { getRandomVideoKey } from "../utils/profileVideos"
import { getRandomWizardData } from "../utils/randomize"


function NewWizardPage () {

     const [wizardFormData, setWizardFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        bloodStatus: '',
        house: '',
        patronus: '',
        wand: {
            wood: '',
            core: '',
            lengthInches: 0,
        },
        specialty: '',
        status: 'active',
        avatar: getRandomVideoKey('male'),
    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const body = wizardFormData

        try {
            await axios.post(`${import.meta.env.VITE_SERVER_URL}/wizards`, body)
            localStorage.setItem('hasCreatedWizard', 'true')
            await postEvent(`A new Wizard has joined the community ! Welcome ${wizardFormData.firstName} ${wizardFormData.lastName}`, 'new_wizard')
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
            setWizardFormData({ ...wizardFormData, [nestedObject]: {...wizardFormData[nestedObject], [nestedObjectKey]: e.target.value} })
        } else {
            setWizardFormData({ ...wizardFormData, [fieldName]: e.target.value })
        }
        if (fieldName === 'gender') {
            const videoKey = getRandomVideoKey(e.target.value)
            setWizardFormData({...wizardFormData, gender: e.target.value, avatar: videoKey})
            return
        }

    }

    const handleRandomizeAll = () => {
        setWizardFormData(prev => ({ ...getRandomWizardData(), status: prev.status }))
    }

    return(
        <section id="new-wizard-page-section">
            <WizardForm
                formData={wizardFormData}
                onSubmit={handleSubmit}
                onChange={handleChange}
                onRandomizeAll={handleRandomizeAll}
                onClose={() => navigate(-1)}
            />
        </section>
    )
}

export default NewWizardPage

