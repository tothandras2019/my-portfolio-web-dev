import './input-component.css'
export const MyInput = ({ inputType }) => {
  const { email, password } = inputType
  return (
    <span>
      <input type='text' placeholder={inputType} />
    </span>
  )
}
