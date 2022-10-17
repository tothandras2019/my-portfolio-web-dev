import './auth-form-component.css'
import { MyInput } from '../../input/input-component'
import { Button } from '../../button/button-component'

export const MyForm = ({ inputs, signType }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>This is header</h1>
      {Object.entries(inputs).map((inputType) => (
        <MyInput inputType={inputType} />
      ))}

      <Button />
    </form>
  )
}
