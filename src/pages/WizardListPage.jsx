import { useEffect, useState } from 'react'
import axios from 'axios'

import WizardCard from '../components/WizardCard'
import '../styles/WizardList.css'

function WizardListPage () {

    const [allWizards, setAllWizards]= useState(null)
    const [isLoading, setIsLoading]= useState(true)

    useEffect (() => {
        getData()
    }, [])

    const getData = async() => {
        try {
            const [responseWizard, responseSociety] = await Promise.all([
                axios.get(`${import.meta.env.VITE_SERVER_URL}/wizards`),
                axios.get(`${import.meta.env.VITE_SERVER_URL}/societies`)
            ])
            const wizardSociety = responseWizard.data.map((wizard) => {
                return {...wizard, society: responseSociety.data.find((society)=> society.id === wizard.societyId)}
            })
            console.log(wizardSociety)
            setAllWizards(wizardSociety)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoading) return <h3>Loading...</h3>

    return(
        <div className="wizard-card-container">
            {allWizards.map((wizard) => {
                return <WizardCard key={wizard.id} {...wizard} />
            })}
        </div>
    )
}

export default WizardListPage