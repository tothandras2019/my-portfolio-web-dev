import './button-component.css'

export const Button = ({ type, value, handler }) => {
  const handlerOnClick = (event) => {
    handler(event)
  }

  return <input type='button' value='Google' onClick={handlerOnClick} />
}
