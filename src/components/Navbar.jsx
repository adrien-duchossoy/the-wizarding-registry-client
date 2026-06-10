import { Link } from 'react-router-dom'

function Navbar (){
    return(
        <div>
            <Link to={'/'}>
                Home
            </Link>
            <Link to={'/wizards'}>
                All wizards
            </Link>
            <Link to={'/societies'}>
                All Societies
            </Link>
        </div>
    )
}

export default Navbar