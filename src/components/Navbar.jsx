
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar (){

    const [hasCreatedWizard] = useState(localStorage.getItem('hasCreatedWizard'))

    return(
        <div className="navbar">
            <Link to={'/home'}>
                Home
            </Link>
            <Link to={'/wizards'}>
                All wizards
            </Link>
            {!hasCreatedWizard && (<Link to={'/wizards/create'}>Create my wizard</Link>)}
            
        </div>
    )
}

export default Navbar