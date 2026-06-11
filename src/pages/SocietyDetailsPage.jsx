
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

import WizardCard from '../components/WizardCard'
import ConfirmModal from '../components/ConfirmModal'
import '../styles/SocietyDetails.css'


function SocietyDetailsPage () {

    const navigate = useNavigate()
    const {societyId} = useParams()

    const [society, setSociety] = useState(null)
    const [wizards, setWizards] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
        try {
            const [responseSociety, responseWizard] = await Promise.all([
                axios.get(`${import.meta.env.VITE_SERVER_URL}/societies/${societyId}`),
                axios.get(`${import.meta.env.VITE_SERVER_URL}/wizards?societyId=${societyId}`)
            ])
                
            setSociety(responseSociety.data)
            setWizards(responseWizard.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_SERVER_URL}/societies/${societyId}`)
            navigate('/wizards')
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoading) return <h3>Loading...</h3>

    return(
        <div className="society-details-page">

            <div className="society-header">
                <div className="society-crest"></div>
                <h1 className="society-name">{society.name}</h1>
                <p className="society-description">{society.description}</p>
            </div>

            <div className="society-wizards-list">
                {wizards.map((wizard) => (
                    <WizardCard key={wizard.id} {...wizard} currentSocietyId={societyId}/>
                ))}
            </div>

            <Link to={`/wizards`}>
                <button>Back</button>
            </Link>
            <button onClick={() => setShowDeleteModal(true)}>Delete Society</button>

            {showDeleteModal && (
                <ConfirmModal
                    message="Are you sure you want to delete this society ?"
                    onConfirm={handleDelete}
                    onCancel={() => setShowDeleteModal(false)}
                />
            )}

        </div>
    )
}

export default SocietyDetailsPage