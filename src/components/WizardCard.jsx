import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../styles/WizardCard.css'
import placeholderPicture from '../assets/images/placeholder-avatar.png'

function WizardCard({ id, firstName, lastName, society, status, avatar, loyalty, bloodStatus, societyId, currentSocietyId, voteCount = {}, allSocieties = [] }) {

    const [selectedSocietyId, setSelectedSocietyId] = useState('')
    const [hasVoted, setHasVoted] = useState(localStorage.getItem('voted_wizard_' + id))

    const handleVote = async () => {
        if (!selectedSocietyId || hasVoted) return
        try {
            const updatedVoteCount = {
                ...voteCount,
                [selectedSocietyId]: (voteCount[selectedSocietyId] || 0) + 1
            }
            await axios.patch(`${import.meta.env.VITE_SERVER_URL}/wizards/${id}`, { voteCount: updatedVoteCount })
            localStorage.setItem('voted_wizard_' + id, selectedSocietyId)
            setHasVoted(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="wizard-card">
            {society?.name && (
                <Link className="society-badge" to={`/societies/${societyId}`}>
                    {society.name}
                </Link>
            )}

            <img src={avatar || placeholderPicture} alt="profile picture of the wizard" onError={(e) => e.target.src = placeholderPicture} />
            <h3>{firstName} {lastName}</h3>
            <p>{bloodStatus}</p>
            <p>Loyalty {loyalty}</p>

            <div className="vote-section">
                {hasVoted ? (
                    <p className="vote-confirmation">Vote submitted ✓</p>
                ) : (
                    <>
                        {currentSocietyId ? (
                            <button onClick={handleVote}>Upvote to stay in society</button>
                        )
                            : (
                                <>
                                    <select value={selectedSocietyId} onChange={(e) => setSelectedSocietyId(e.target.value)}>
                                        <option value="">Vote for a society</option>
                                        {allSocieties.map((s) => (
                                            <option key={s.id} value={s.id}>{s.name}</option>
                                        ))}
                                    </select>
                                    <button onClick={handleVote} disabled={!selectedSocietyId}>Vote</button>
                                </>
                            )}

                    </>
                )}
            </div>

            <div>
                <Link to={`/wizards/${id}`}>
                    <button>View more</button>
                </Link>
                <Link to={`/wizards/${id}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
        </div >
    )
}

export default WizardCard
