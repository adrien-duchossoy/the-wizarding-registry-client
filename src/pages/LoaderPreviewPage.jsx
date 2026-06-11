import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from '../components/Loader'

function SplashPage() {
    const [progress, setProgress] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        let currentProgress = 0
        let completed = false
        let intervalId = null

        const complete = () => {
            if (completed) return
            completed = true
            clearInterval(intervalId)
            setProgress(100)
            setTimeout(() => navigate('/home'), 800)
        }

        intervalId = setInterval(() => {
            if (currentProgress < 90) {
                currentProgress += 1
                setProgress(currentProgress)
            }
        }, 400)

        axios.get(`${import.meta.env.VITE_SERVER_URL}/wizards`).finally(complete)

        return () => {
            clearInterval(intervalId)
            completed = true
        }
    }, [])

    return (
        <div style={{ backgroundColor: '#221A17', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Loader progress={progress} />
        </div>
    )
}

export default SplashPage
