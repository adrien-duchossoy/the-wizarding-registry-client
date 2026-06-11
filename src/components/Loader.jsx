import { useState, useEffect } from 'react'
import '../styles/Loader.css'
import progressBar from '../assets/images/progress-bar.png'
import dividerTop from '../assets/images/divider-top.png'
import dividerBottom from '../assets/images/divider-bottom.png'

const phrases = [
    'Bribing the goblins for faster access...',
    'Consulting the Sorting Hat...',
    'Owling the Ministry of Magic...',
    'Polishing the Time-Turner...',
    'Negotiating with the portraits...',
    'Waking the castle...',
]

function Loader({ progress }) {
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false)
            setTimeout(() => {
                setPhraseIndex(i => (i + 1) % phrases.length)
                setVisible(true)
            }, 400)
        }, 2800)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="loader-wrapper">
            <img src={dividerTop} className="loader-divider" id="divider-top" alt="" />

            <div className="loader-container">
                <img src={progressBar} className="loader-frame" alt="" />
                <div className="loader-track">
                    <div className="loader-fill" style={{ width: `${progress}%` }} />
                </div>
            </div>

            <p className={`loader-phrase ${visible ? 'visible' : 'hidden'}`}>
                {phrases[phraseIndex]}
            </p>

            <img src={dividerBottom} className="loader-divider" id="divider-bottom" alt="" />
        </div>
    )
}

export default Loader
