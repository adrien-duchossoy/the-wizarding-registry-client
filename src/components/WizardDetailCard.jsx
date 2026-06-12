
import { useNavigate } from 'react-router-dom'

import { getVideoUrl } from '../utils/profileVideos'


import '../styles/WizardDetailsCard.css'

import framePicture from '../assets/images/frame-picture.png'
import backBtn from '../assets/images/back-btn.png'



function WizardDetailCard({ wizard, voteBySociety }) {

    const navigate = useNavigate()

    return (
        <div>

            <div className="wizard-card-photo-wrapper" id="avatar-wrapper" >
                <div className="wizard-card-avatar">
                    {wizard.avatar
                        ? <video src={getVideoUrl(wizard.avatar)} autoPlay loop muted />
                        : <img src="/placeholder-avatar.png" alt="profile" />
                    }
                </div>
                <img className="wizard-card-frame" src={framePicture} alt="" />
            </div>

            <div className='wizard-main-info'>
                <h1 className='wizard-name'>{wizard.firstName} {wizard.lastName}</h1>
                <div className='society-vote-container'>
                    {voteBySociety().map((societyVote) => {
                        return (
                            <div className='society-vote-info'>
                                <img className='society-badge' src={`/${societyVote.badge}`} alt="Society badge" />
                                <p key={societyVote.name}>
                                    {societyVote.votes} {societyVote.votes <= 1 ? 'vote' : 'votes'}
                                </p>
                            </div>

                        )
                    })
                    }
                </div>

            </div>

            <img className='back-btn' src={backBtn} alt="Back Button" onClick={() => navigate(-1)} />
        </div>
    )
}

export default WizardDetailCard