

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