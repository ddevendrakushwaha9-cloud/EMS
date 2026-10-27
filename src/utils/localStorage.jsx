

const employees = [
  {
  id: 1,
  firstName: "Neha",
  email: "neha@gmail.com",
  password: "123",
  taskNumber: {
    active: 0,
    newTask: 0,
    completed: 0,
    failed: 0,
  },
  tasks: [],
},
  {
    id: 2,
    firstName: "Arjun",
    email: "arjun@gmail.com",
    password: "123",
    taskNumber: { active: 0, newTask: 0, completed: 0, failed: 0 },
    tasks: [],
  },
  {
    id: 3,
    firstName: "Pooja",
    email: "pooja@gmail.com",
    password: "123",
    taskNumber: { active: 0, newTask: 0, completed: 0, failed: 0 },
    tasks: [],
  },
  {
    id: 4,
    firstName: "Rahul",
    email: "rahul@gmail.com",
    password: "123",
    taskNumber: { active: 0, newTask: 0, completed: 0, failed: 0 },
    tasks: [],
  },
  {
    id: 5,
    firstName: "Simran",
    email: "simran@gmail.com",
    password: "123",
    taskNumber: { active: 0, newTask: 0, completed: 0, failed: 0 },
    tasks: [],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@me.com",
    password: "123",
  },
];

const taskStatuses = ['newTask', 'active', 'completed', 'failed']

const getTaskCounts = (tasks = []) =>
  taskStatuses.reduce((counts, status) => {
    counts[status] = tasks.filter((task) => task?.[status] === true).length
    return counts
  }, {})


export const setLocalStorage = ()=>{
    if (typeof window === 'undefined') return

    const savedEmployees = JSON.parse(localStorage.getItem('employees') || '[]')
    const savedEmails = new Set(savedEmployees.map((employee) => employee.email))
    const missingEmployees = employees.filter((employee) => !savedEmails.has(employee.email))

    if (missingEmployees.length > 0) {
      localStorage.setItem('employees', JSON.stringify([...savedEmployees, ...missingEmployees]))
    } else if (savedEmployees.length === 0) {
        localStorage.setItem('employees', JSON.stringify(employees))
    }
    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(admin))
    }
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
}

export const transitionEmployeeTask = (employeeEmail, taskIndex, nextStatus) => {
    if (!taskStatuses.includes(nextStatus)) {
      throw new Error(`Unknown task status: ${nextStatus}`)
    }

    const {employees} = getLocalStorage()
    if (!Array.isArray(employees)) {
      throw new Error('Employee data is missing from localStorage.')
    }

    const employeeIndex = employees.findIndex((employee) => employee.email === employeeEmail)
    if (employeeIndex < 0) {
      throw new Error('The task owner could not be found.')
    }

    const employee = employees[employeeIndex]
    const tasks = Array.isArray(employee.tasks) ? employee.tasks : []
    const task = tasks[taskIndex]
    if (!task) {
      throw new Error('The task could not be found.')
    }

    const canAccept = nextStatus === 'active' && task.newTask === true
    const canFinish = ['completed', 'failed'].includes(nextStatus) && task.active === true
    if (!canAccept && !canFinish) {
      throw new Error('This task can no longer be moved to that status.')
    }

    const updatedTasks = tasks.map((item, index) =>
      index === taskIndex
        ? {
            ...item,
            newTask: nextStatus === 'newTask',
            active: nextStatus === 'active',
            completed: nextStatus === 'completed',
            failed: nextStatus === 'failed',
          }
        : item
    )
    const updatedEmployee = {
      ...employee,
      tasks: updatedTasks,
      taskNumber: {
        ...(employee.taskNumber || {}),
        ...getTaskCounts(updatedTasks),
      },
    }
    const updatedEmployees = employees.map((item, index) =>
      index === employeeIndex ? updatedEmployee : item
    )

    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    return updatedEmployees
}