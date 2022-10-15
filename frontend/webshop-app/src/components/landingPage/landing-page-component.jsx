import './landing-page-component.css'

import { Outlet } from 'react-router-dom'
import { Navigation } from '../navigation/navigation-component.jsx'
import { Footer } from '../footer/footer-components.jsx'
import { getOrders, useFetch } from '../../DATA/data-connect-to-server.js'
import { useEffect, useState } from 'react'

export const LandingPage = () => {
  const [data] = useFetch('http://127.0.0.1:9000/api/orders')

  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    if (data) {
      setMessage(() => data.message)
      setSuccess(() => data.success)
    }
  }, [data])

  return (
    <section>
      <Navigation />
      <div className='main-contents'>
        <Outlet />
      </div>
      <Footer />
    </section>
  )
}
