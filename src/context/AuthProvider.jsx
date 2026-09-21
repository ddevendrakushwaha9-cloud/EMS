import React, { createContext, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  
  const [userData, setUserData] = useState(() => {
    setLocalStorage()
    const {employees, admin} = getLocalStorage()
    return {employees, admin}
  })

  const refreshEmployees = () => {
    const {employees, admin} = getLocalStorage()
    setUserData({employees, admin})
  }

  return (
    <div>
        <AuthContext.Provider value= {{...userData, refreshEmployees}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider