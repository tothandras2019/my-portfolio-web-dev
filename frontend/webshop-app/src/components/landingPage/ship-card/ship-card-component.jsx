import './ship-card-component.css'
import { Button } from './../../button/button-component.jsx'

export const Card = ({ imgId, name, price }) => {
  const hanlerSaleShip = (event) => {}

  return (
    <div>
      <img src={`http://127.0.0.1:9000/img/${imgId}`} alt='no pics available' width={400} />
      <div className='ship-sale-options'>
        <div>
          <h1>{name}</h1>
          <p>price: {price}</p>
        </div>
        <Button type='button' signType={'I want it'} handler={hanlerSaleShip} />
      </div>
    </div>
  )
}
