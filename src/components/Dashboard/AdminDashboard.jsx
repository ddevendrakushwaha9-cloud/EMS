import React from 'react'
import Header from '../Auth/other/Header'
import CreateTask from '../Auth/other/CreateTask'
import CreateEmployee from '../Auth/other/CreateEmployee'
import AllTask from '../Auth/other/AllTask'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

export const AdminDashboard = (props) => {
  const authData = useContext(AuthContext)

  return (
    <div className='h-screen w-full p-7'>
        <Header changeUser={props.changeUser}/>
        <CreateEmployee onEmployeeCreated={authData.refreshEmployees}/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard