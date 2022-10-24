import './auth-form-component.css'
import { MyInput } from '../../input/input-component'
import { Button } from '../../button/button-component'
import { useState } from 'react'

export const MyForm = ({ title, inputs, signType, handler }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [checker, setChecker] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const userFilledInValues = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }
    handler(userFilledInValues)
  }

  const handleGoogleLogin = (event) => {
    console.log('google login')
  }

  const handleEmail = (event) => {
    const email = event.target.value
    setEmail(email)
  }
  const handlePassword = (event) => {
    const password = event.target.value
    setPassword(password)
  }
  const inputsHandlers = [handleEmail, handlePassword]

  const handleConfirmPassword = (event) => {
    const confirmPassword = event.target.value

    const matcher = password !== confirmPassword ? true : false
    setChecker(matcher)
    if (!matcher) setConfirmPassword(confirmPassword)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      {Object.entries(inputs).map(([key, value], i) => (
        <MyInput key={`input-${i}`} inputType={value} inputHandler={inputsHandlers[i]} />
      ))}
      {title === 'Sign up' && <MyInput inputType='confirm password' inputHandler={handleConfirmPassword} />}
      <div className='fault-message'>{title === 'Sign up' && checker && <p>password and confirm password not equal!</p>}</div>
      <div className='button-container'>
        <Button signType={title} type='submit' />
        {title === 'Sign up' && <Button signType='google' type='button' handler={handleGoogleLogin} />}
      </div>
    </form>
  )
}
