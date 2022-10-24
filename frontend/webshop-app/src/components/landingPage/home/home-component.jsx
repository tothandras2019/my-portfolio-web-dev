import './home-component.css'

import { GetLinkContext } from './../../contexts/contexts-component.jsx'
import { useEffect, useState, useContext } from 'react'
import { useFetch } from '../../../DATA/data-connect-to-server.js'
import { Card } from '../ship-card/ship-card-component.jsx'

export const Home = () => {
  const homeUrl = 'http://127.0.0.1:9000/'

  const { link: linkNav } = useContext(GetLinkContext)
  const [isPressed, setIsPressed] = useState(false)
  const [data] = useFetch(homeUrl)

  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    if (!data) return
    console.log(data)
    // setSuccess(success)
    // setMessage(message)
    return () => {}
  }, [data])

  return (
    <div className='home-container'>
      <div className='ships-for-sale'>{data && data.map((ship) => <Card key={ship.id} imgId={ship.id} name={ship.name} price={ship.price} />)}</div>

      {/* <img src='http://127.0.0.1:9000/img/2' alt='no such picture' /> */}
    </div>
  )
}
