import './App.css'
import './Reset.css'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './components/landingPage/landing-page-component'
import { Authentication } from './components/auth/authentication-component.jsx'
import { Shop } from './components/shop/shop-component'
import { Contacts } from './components/contacts/contacts-component'
import { Home } from './components/landingPage/home/home-component'

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />}>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contacts' element={<Contacts />} />
      </Route>
    </Routes>
  )
}

export default App
