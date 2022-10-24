import { Button } from '../button/button-component'
import './authentication-component.css'
import { MyForm } from './auth-form/auth-form-component.jsx'

export const Authentication = () => {
  const inputs = {
    email: 'e-mail',
    password: 'password',
  }

  const handlerSignIn = (userFilledInValues) => {
    console.log(userFilledInValues)
  }
  const handlerSignUp = (userFilledInValues) => {
    console.log(userFilledInValues)
  }

  return (
    <div className='auth-container'>
      <div className='form-container'>
        <MyForm title='Sign in' inputs={inputs} signType='Sign In' handler={handlerSignIn} />
      </div>
      <div className='form-container'>
        <MyForm title='Sign up' inputs={inputs} signType='Sign Up' handler={handlerSignUp} />
      </div>
    </div>
  )
}
