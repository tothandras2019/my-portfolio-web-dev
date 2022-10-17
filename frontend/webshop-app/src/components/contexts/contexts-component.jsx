import { useContext, createContext, useState } from 'react'

export const GetLinkContext = createContext(null)

export const GetLinkProvider = ({ children }) => {
  const [link, setLink] = useState(null)
  return <GetLinkContext.Provider value={{ link, setLink }}>{children}</GetLinkContext.Provider>
}
