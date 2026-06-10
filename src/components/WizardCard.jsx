import { Link } from 'react-router-dom'

import '../styles/WizardCard.css'
import placeholderPicture from '../assets/images/placeholder-avatar.png'

function WizardCard ({id, firstName, lastName, society, status, avatar, loyalty, bloodStatus, societyId}) {

    return(
        <div className="wizard-card">
            <div>
                <Link to={`/societies/${societyId}`}>
                    <p>{society?.name}</p>
                </Link>
            </div>
            <img src={avatar || placeholderPicture} alt="profile picture of the wizard" onError={(e) => e.target.src = placeholderPicture}/>
            <h3>{firstName} {lastName}</h3>
            
            <p>{bloodStatus}</p>
            <p>Loyalty {loyalty}</p>
            <div>
                <Link to={`/wizards/${id}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    )
}

export default WizardCard