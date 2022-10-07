import { useEffect } from 'react'

export const getOrders = () => {
  const url = 'http://127.0.0.1:9000/api/orders'
  fetch(url)
    .then((response) => response.json())
    .then((message) => console.log(message))
}
