import './home-component.css'

import { GetLinkContext } from './../../contexts/contexts-component.jsx'
import { useEffect, useState, useContext } from 'react'
import { useFetch } from '../../../DATA/data-connect-to-server.js'
import { Card } from '../ship-card/ship-card-component.jsx'

export const Home = () => {
  const homeUrl = 'http://127.0.0.1:9000/'
  const priceFormat = Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

  const { link: linkNav } = useContext(GetLinkContext)
  const [isPressed, setIsPressed] = useState(false)
  const [data] = useFetch(homeUrl)

  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    if (!data) return
    console.log(data)

    return () => {}
  }, [data])

  return (
    <div className='home-container'>
      <div className='ships-for-sale'>
        {data &&
          data.map((ship) => {
            const price = priceFormat.format(ship.price)
            return <Card key={ship.id} imgId={ship.id} name={ship.name} price={price} />
          })}
      </div>

      {/* <img src='http://127.0.0.1:9000/img/2' alt='no such picture' /> */}
    </div>
  )
}
