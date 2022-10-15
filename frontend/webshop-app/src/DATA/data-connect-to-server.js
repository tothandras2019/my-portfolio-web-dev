import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    //subscription
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(() => data))

    return () => {
      //unsubscribe here
    }
  }, [url])

  return [data]
}
