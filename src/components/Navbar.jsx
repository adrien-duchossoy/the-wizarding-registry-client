
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar (){

    const [hasCreatedWizard] = useState(localStorage.getItem('hasCreatedWizard'))

    return(
        <div className="navbar">
            <Link to={'/home'} id="daily-prophet">
                Daily Prophet
            </Link>
            <Link to={'/wizards'}>
                Registry
            </Link>
            {!hasCreatedWizard && (
                <Link to={'/wizards/create'} className='create-wizard-link'>
                    <button className='create-wizard-btn'>Create my wizard</button>
                </Link>
            )}
            
        </div>
    )
}

export default Navbar