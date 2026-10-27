import React, { useContext, useState } from "react";
import Login from './components/Auth/Login'
import EmployeeDeshboard from "./components/Dashboard/EmployeeDashboard";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthContext";

const App = () =>{
  const [session, setSession] = useState(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    return loggedInUser ? JSON.parse(loggedInUser) : {role: null, data: null}
  })
  const authData = useContext(AuthContext)

  const handleLogin = (email, password) =>{
    const normalizedEmail = email.trim().toLowerCase()
    const admin = Array.isArray(authData.admin) && authData.admin.some(
      (item) => item.email?.trim().toLowerCase() === normalizedEmail && item.password === password
    )
    const isDefaultAdmin = normalizedEmail === 'admin@me.com' && password === '123'

    if(admin || isDefaultAdmin){
      setSession({role: 'admin', data: null})
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
      return
    }

    const employee = authData.employees.find(
      (item) => item.email?.trim().toLowerCase() === normalizedEmail && item.password === password
    )
    if(employee){
      setSession({role: 'employee', data: employee})
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
      return
    }

    window.alert('Invalid credentials')
  }

  const handleLogout = () => setSession({role: null, data: null})

  return (
    <>
    {!session.role ? <Login handleLogin={handleLogin}/>: ''}
    {session.role === 'admin' ? <AdminDashboard changeUser={handleLogout}/> : session.role === 'employee' ? <EmployeeDeshboard changeUser={handleLogout} data={session.data} /> : null}
    </>
  )
}

export default App
