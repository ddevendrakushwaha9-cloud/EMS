import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
import { getLocalStorage, setLocalStorage, transitionEmployeeTask } from '../utils/localStorage'

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

  const updateTaskStatus = (employeeEmail, taskIndex, nextStatus) => {
    const employees = transitionEmployeeTask(employeeEmail, taskIndex, nextStatus)
    setUserData((currentData) => ({...currentData, employees}))
  }

  return (
    <div>
        <AuthContext.Provider value= {{...userData, refreshEmployees, updateTaskStatus}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider