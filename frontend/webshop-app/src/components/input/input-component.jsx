import './input-component.css'
export const MyInput = ({ inputType, inputHandler }) => {
  const inputT = inputType === 'confirm password' ? 'password' : inputType === 'e-mail' ? 'email' : inputType

  return (
    <span>
      <input required={true} type={inputT} placeholder={inputType} onChange={inputHandler} />
    </span>
  )
}
