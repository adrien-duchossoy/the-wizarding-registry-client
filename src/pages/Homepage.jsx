
import { useState, useEffect } from 'react'
import axios from 'axios'

import '../styles/Homepage.css'

const getArticleBody = (event) => {
  switch (event.type) {
    case 'new_society':
      return 'Our sources confirm that this new society has officially been recognised by the Ministry of Magic. Citizens are encouraged to cast their votes without delay.'
    case 'new_wizard':
      return 'The Registry has been updated. This wizard has been officially enrolled and is now eligible to join a society of their choosing.'
    default:
      return null
  }
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}

function Homepage() {
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const responseEvents = await axios.get(`${import.meta.env.VITE_SERVER_URL}/events`)
      setEvents(responseEvents.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) return <h3>Loading...</h3>

  return (
    <div className="gazette-wrapper">
      <header className="gazette-header">
        <p className="gazette-edition">Est. 1702 — Wizarding World Press</p>
        <h1 className="gazette-title">The Daily Prophet</h1>
        <p className="gazette-tagline">All the news that's fit for wizards</p>
      </header>
      <hr className="gazette-divider" />
      <section className="gazette-grid">
        {events.map((event) => (
          <article key={event.id} className={`gazette-article gazette-article--${event.type}`}>
            <p className="gazette-article-date">{formatDate(event.createdAt)}</p>
            <h2 className="gazette-article-headline">{event.message}</h2>
            {getArticleBody(event) && (
              <p className="gazette-article-body">{getArticleBody(event)}</p>
            )}
          </article>
        ))}
      </section>
    </div>
  )
}

export default Homepage
