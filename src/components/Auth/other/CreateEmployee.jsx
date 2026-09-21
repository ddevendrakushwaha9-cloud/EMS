import React, { useState } from 'react'

const CreateEmployee = ({ onEmployeeCreated }) => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    const employees = JSON.parse(localStorage.getItem('employees') || '[]')
    const normalizedEmail = email.trim().toLowerCase()

    if (employees.some((employee) => employee.email.toLowerCase() === normalizedEmail)) {
      setMessage('Employee email already exists.')
      return
    }

    const employee = {
      id: Date.now(),
      firstName: firstName.trim(),
      email: normalizedEmail,
      password,
      taskNumber: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      tasks: [],
    }

    localStorage.setItem('employees', JSON.stringify([...employees, employee]))
    onEmployeeCreated()
    setFirstName('')
    setEmail('')
    setPassword('')
    setMessage('Employee created successfully.')
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <h2 className='text-lg font-medium mb-4'>Create Employee</h2>
      <form onSubmit={submitHandler} className='flex flex-wrap gap-3 items-end'>
        <input
          required
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className='text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-400'
          placeholder='Employee name'
        />
        <input
          required
          type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className='text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-400'
          placeholder='Email'
        />
        <input
          required
          minLength='3'
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className='text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-400'
          placeholder='Password'
        />
        <button className='bg-emerald-500 py-2 px-5 rounded text-sm hover:bg-emerald-600' type='submit'>
          Add Employee
        </button>
      </form>
      {message && <p className='text-sm text-emerald-400 mt-3'>{message}</p>}
    </div>
  )
}

export default CreateEmployee
