
import { useNavigate } from 'react-router-dom'


function WizardDetailCard({ wizard, voteBySociety }) {

    const navigate = useNavigate()

    return (
        <div>
            <h1>{wizard.firstName} {wizard.lastName} {wizard.loyalty}</h1>
            {voteBySociety().map((societyVote) => {
                return (
                    <p key={societyVote.name}>
                        {societyVote.name} : {societyVote.votes} {societyVote.votes <= 1 ? 'vote' : 'votes'}
                    </p>
                )
            })
            }
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default WizardDetailCard