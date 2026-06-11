
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


import WizardDetailCard from '../components/WizardDetailCard'

import '../styles/WizardDetail.css'


function WizardDetailPage (){

    const { wizardId } = useParams()

    const [wizard, setWizard]= useState(null)
    const [societies, setSocieties]=useState([])
    const [isLoading, setIsLoading]= useState(true)

    useEffect (() => {
        getData()
    }, [])

    const getData = async() => {
        try {
            const [responseWizard, responseSociety] = await Promise.all([
                axios.get(`${import.meta.env.VITE_SERVER_URL}/wizards/${wizardId}`),
                axios.get(`${import.meta.env.VITE_SERVER_URL}/societies`)
            ])
            setWizard(responseWizard.data)
            setSocieties(responseSociety.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const getVoteBySociety = () => {
        return societies.map((society)=> 
        {
            return {
                name: society.name,
                votes: wizard.voteCount[society.id] ? wizard.voteCount[society.id] : 0,
                badge: society.badge
            }
        })
    }

    if (isLoading) return <h3>Loading...</h3>


    return (
        <div className='wizard-detail-container'>
            <WizardDetailCard 
                wizard={wizard}
                voteBySociety={getVoteBySociety}
            />
        </div>
    )
}

export default WizardDetailPage