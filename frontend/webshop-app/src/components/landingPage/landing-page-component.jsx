import './landing-page-component.css'

import { Outlet } from 'react-router-dom'
import { Navigation } from '../navigation/navigation-component.jsx'
import { Footer } from '../footer/footer-components.jsx'
import { getOrders } from '../../DATA/data-connect-to-server.js'
import { useEffect } from 'react'

export const LandingPage = () => {
  useEffect(() => {
    getOrders()
    return () => {}
  }, [])

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
