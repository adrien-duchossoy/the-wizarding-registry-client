import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'

function WithNavbar () {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default WithNavbar