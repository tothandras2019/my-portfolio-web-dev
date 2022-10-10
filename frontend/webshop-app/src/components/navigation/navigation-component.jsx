import './navigation-component.css'
import logo from './../../images/other/seagull_203318.jpg'
import cartIcon from './../../images/svg/shopping_basket.svg'

export const Navigation = ({ menu }) => {
  const menuItem = { home: 'home', shop: 'shop', contacts: 'contacts', auth: 'sign in' }

  return (
    <nav>
      <div className='contents'>
        <div className='logo-container'>
          <img src={logo} alt='logo missing' />
          <h2 className='logo-title'>The Segull</h2>
        </div>
        <div className='menu-items'>
          {Object.entries(menuItem).map(([key, value]) => (
            <a key={key} href={`/${key === 'home' ? '' : key}`}>
              {value}
            </a>
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
