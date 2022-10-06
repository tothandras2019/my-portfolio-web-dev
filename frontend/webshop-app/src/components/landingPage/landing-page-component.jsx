import { Outlet } from 'react-router-dom'
import { Navigation } from '../navigation/navigation-component.jsx'
import { Footer } from '../footer/footer-components.jsx'

export const LandingPage = () => {
  return (
    <section>
      <Navigation />
      <div className='contents'>
        <Outlet />
      </div>
      <Footer />
    </section>
  )
}
