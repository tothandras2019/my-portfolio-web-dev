import { Button } from '../button/button-component'
import './authentication-component.css'
import { MyForm } from './auth-form/auth-form-component.jsx'

export const Authentication = () => {
  const inputs = {
    email: 'e-mail',
    password: 'password',
  }

  return (
    <div className='auth-container'>
      <div className='form-container'>
        <MyForm inputs={inputs} signType='Sign In' />
      </div>
      <div className='form-container'>
        <MyForm inputs={inputs} signType='Sign Up' />
      </div>
    </div>
  )
}
