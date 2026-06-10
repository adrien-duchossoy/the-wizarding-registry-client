import { useEffect, useState } from 'react'
import axios from 'axios'

import WizardCard from '../components/WizardCard'
import Filters from '../components/Filters'
import '../styles/WizardList.css'

function WizardListPage () {

    const [allWizards, setAllWizards]= useState(null)
    const [allSocieties, setAllSocieties]= useState([])
    const [isLoading, setIsLoading]= useState(true)

    const [selectedSociety, setSelectedSociety] = useState('')
    const [selectedHouse, setSelectedHouse]= useState('')
    const [selectedBloodStatus, setSelectedBloodStatus]= useState('')

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
            setAllWizards(wizardSociety)
            setAllSocieties(responseSociety.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoading) return <h3>Loading...</h3>

    const filteredWizards = allWizards.filter((wizard)=> {
        if(selectedSociety && wizard.societyId !== selectedSociety) return false
        if(selectedHouse && wizard.house !== selectedHouse) return false
        if(selectedBloodStatus && wizard.bloodStatus !== selectedBloodStatus) return false
        return true
    })



    return(

        <section className="wizard-list-section">
            <Filters
                allSocieties={allSocieties}
                houses={allWizards.map((w) => w.house)}
                bloodStatuses={allWizards.map((w) => w.bloodStatus)}
                selectedSociety={selectedSociety}
                onSocietyChange={(e) => setSelectedSociety(e.target.value)}
                selectedHouse={selectedHouse}
                onHouseChange={(e) => setSelectedHouse(e.target.value)}
                selectedBloodStatus={selectedBloodStatus}
                onBloodStatusChange={(e) => setSelectedBloodStatus(e.target.value)}
            />
            <div className="wizard-card-container">
                {filteredWizards.map((wizard) => {
                    return <WizardCard key={wizard.id} {...wizard} allSocieties={allSocieties} />
                })}
            </div>
        </section>
        
    )
}

export default WizardListPage