import React, { useContext } from 'react'
import {AuthContext} from '../../../context/AuthProvider'
export const AllTask = () => {

    const authData = useContext(AuthContext)
    
    
  return (
    
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-60'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h5 className='text-lg font-medium w-1/5'>Employee Email</h5>
            <h5 className='text-lg font-medium w-1/5'>New Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h2 className='text-lg font-medium w-1/5'>Completed</h2>
            <h3 className='text-lg font-medium w-1/5'>Failed</h3>
        </div>
        <div className='overflow-auto'>
            {authData.employees.map((elem, idx) => {
            return (
            <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>{elem.email}</h2>
                <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumber.newTask}</h3>
                <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumber.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskNumber.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumber.failed}</h5>
            </div>
            )
            })}
        </div>

    </div>
  )
}

export default AllTask