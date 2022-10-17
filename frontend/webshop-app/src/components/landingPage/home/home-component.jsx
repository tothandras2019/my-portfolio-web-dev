import { GetLinkContext } from './../../contexts/contexts-component.jsx'
import { useEffect, useState, useContext } from 'react'
import { useFetch } from '../../../DATA/data-connect-to-server.js'

export const Home = () => {
  const homeUrl = 'http://127.0.0.1:9000/'
  const { link: linkNav } = useContext(GetLinkContext)
  const [isPressed, setIsPressed] = useState(false)
  const [data] = useFetch(homeUrl)

  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    if (!data) return
    const { success, message } = data
    setSuccess(success)
    setMessage(message)
    return () => {}
  }, [data])

  return (
    <div className='home-container'>
      {success && <p>{`${success}, ${message}`}</p>}
      <button onClick={() => setIsPressed(true)}>press me for get data</button>
    </div>
  )
}
