import './navigation-component.css'
import logo from './../../images/other/seagull_203318.jpg'
import cartIcon from './../../images/svg/shopping_basket.svg'
import { useContext, useState } from 'react'
import { GetLinkContext } from '../contexts/contexts-component'

export const Navigation = ({ menu }) => {
  const menuItem = { home: 'home', shop: 'shop', contacts: 'contacts', auth: 'sign in' }
  const { setLink } = useContext(GetLinkContext)
  const [acivated, setActivated] = useState(false)

  const handleOnLinkClick = (event) => {
    const link = event.target.dataset.ref
    setLink(() => link)
    setActivated(true)
  }

  return (
    <nav>
      <div className='contents'>
        <div className='logo-container'>
          <img src={logo} alt='logo missing' />
          <h2 className='logo-title'>The Segull</h2>
        </div>
        <div className='menu-items'>
          {Object.entries(menuItem).map(([key, value]) => (
            <span key={`${key}`}>
              <a data-ref={`/${key === 'home' ? '' : key}`} href={`/${key === 'home' ? '' : key}`} onClick={handleOnLinkClick}>
                {value}
              </a>
            </span>
          ))}
        </div>
        <div className='cart-container'>
          <img src={cartIcon} alt='' />
          <p>0</p>
        </div>
      </div>
    </nav>
  )
}
