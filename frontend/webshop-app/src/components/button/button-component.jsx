import './button-component.css'

export const Button = ({ type, signType, value, handler }) => {
  return <input type={type} value={signType} onClick={handler} />
}
