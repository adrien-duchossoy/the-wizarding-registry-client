import { useState, useEffect } from 'react'
import Loader from '../components/Loader'

function LoaderDemoPage() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let current = 0
        const tick = setInterval(() => {
            current += 1
            setProgress(current)
            if (current >= 100) {
                current = 0
                setProgress(0)
            }
        }, 40)
        return () => clearInterval(tick)
    }, [])

    return (
        <div style={{ backgroundColor: '#221A17', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Loader progress={progress} />
        </div>
    )
}

export default LoaderDemoPage
