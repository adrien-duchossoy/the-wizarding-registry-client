import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { getVideoUrl } from '../utils/profileVideos'
import postEvent from '../api/events'

import '../styles/WizardCard.css'
import cardBackground from '../assets/images/wizard-card-background.png'
import framePicture from '../assets/images/frame-picture.png'
import societyBorderSvg from '../assets/images/society-border.svg'

function WizardCard({ id, firstName, lastName, society, status, avatar, loyalty, bloodStatus, societyId, currentSocietyId, voteCount = {}, allSocieties = [] }) {

    const [selectedSocietyId, setSelectedSocietyId] = useState('')
    const [hasVoted, setHasVoted] = useState(localStorage.getItem('voted_wizard_' + id))
    const [showVoteSelect, setShowVoteSelect] = useState(false)

    const handleVote = async (societyToVote) => {
        if (hasVoted) return
        if (!societyToVote) return
        try {
            const updatedVoteCount = {
                ...voteCount,
                [societyToVote]: (voteCount[societyToVote] || 0) + 1
            }
            const topSocietyId = Object.entries(updatedVoteCount)
                .sort((a, b) => b[1] - a[1])[0][0]
            await axios.patch(`${import.meta.env.VITE_SERVER_URL}/wizards/${id}`, {
                voteCount: updatedVoteCount,
                societyId: topSocietyId
            })
            localStorage.setItem('voted_wizard_' + id, societyToVote)
            setHasVoted(true)
            const societyVoteName = allSocieties.find(s => s.id === societyToVote)?.name || societyToVote
            await postEvent(`${firstName} ${lastName} has received a new vote to join ${societyVoteName}`, 'new_vote')
        } catch (error) {
            console.log(error)
        }
    }

    const handleVoteButtonClick = () => {
        if (currentSocietyId) {
            handleVote()
        } else if (!showVoteSelect) {
            setShowVoteSelect(true)
        } else {
            handleVote()
        }
    }

    return (
        <div className="wizard-card">
            <img className="wizard-card-bg" src={cardBackground} alt="" />


            <div className="wizard-card-photo-wrapper">
                <div className="wizard-card-avatar">
                    {avatar
                        ? <video src={getVideoUrl(avatar)} autoPlay loop muted />
                        : <img src="/placeholder-avatar.png" alt="profile" />
                    }
                </div>
                <img className="wizard-card-frame" src={framePicture} alt="" />
            </div>

            <div className="wizard-card-content">
                <div className="wizard-card-bottom">
                    <h3 className="wizard-card-name">{firstName} {lastName}</h3>

                    <div className="wizard-card-society">
                        {society
                            ? <Link to={`/societies/${societyId}`}>{society.name}</Link>
                            : <span>No society</span>
                        }
                    </div>

                    <div className="vote-section">
                        {hasVoted ? (
                            <p className="vote-confirmation">Vote submitted ✓</p>
                        ) : (
                            <div style={{ position: 'relative', width: '100%' }}>
                                <button className="vote-btn">Submit your vote</button>
                                <select
                                    style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}
                                    value={selectedSocietyId}
                                    onChange={(e) => {
                                        setSelectedSocietyId(e.target.value)
                                        handleVote(e.target.value)
                                    }}
                                >
                                    <option value="" disabled>Select a society</option>
                                    {allSocieties.map((s) => (
                                        <option key={s.id} value={s.id}>{s.name}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>

                    <div className="wizard-card-actions">
                        <Link to={`/wizards/${id}`}>
                            <button className="details-btn">See Details</button>
                        </Link>
                        <Link to={`/wizards/${id}/edit`}>
                            <button className="edit-btn">Edit</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WizardCard
