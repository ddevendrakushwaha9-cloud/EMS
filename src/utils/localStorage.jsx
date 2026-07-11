

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
  {
    active: true,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Complete Dashboard UI",
    taskDescription: "Design and complete the employee dashboard interface.",
    taskDate: "2026-07-10",
    category: "Design",
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Fix Login Bug",
    taskDescription: "Resolve the login authentication issue.",
    taskDate: "2026-07-08",
    category: "Bug Fix",
  },
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "API Integration",
    taskDescription: "Connect frontend with employee API.",
    taskDate: "2026-07-12",
    category: "Development",
  },
],
  },

  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
  {
    active: true,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Create Landing Page",
    taskDescription: "Develop a responsive landing page.",
    taskDate: "2026-07-11",
    category: "Frontend",
  },
  {
    active: false,
    newTask: false,
    completed: false,
    failed: true,
    taskTitle: "Database Backup",
    taskDescription: "Take backup of production database.",
    taskDate: "2026-07-05",
    category: "Database",
  },
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Code Review",
    taskDescription: "Review pull requests from teammates.",
    taskDate: "2026-07-13",
    category: "Review",
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Update Documentation",
    taskDescription: "Update API documentation.",
    taskDate: "2026-07-09",
    category: "Documentation",
  },
],
  },

  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
  {
    active: true,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Test Payment Module",
    taskDescription: "Perform testing for payment gateway.",
    taskDate: "2026-07-14",
    category: "Testing",
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Deploy Staging Build",
    taskDescription: "Deploy latest version to staging server.",
    taskDate: "2026-07-07",
    category: "Deployment",
  },
  {
    active: false,
    newTask: false,
    completed: false,
    failed: true,
    taskTitle: "Optimize Queries",
    taskDescription: "Improve SQL query performance.",
    taskDate: "2026-07-06",
    category: "Database",
  },
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Implement Search",
    taskDescription: "Add search functionality.",
    taskDate: "2026-07-15",
    category: "Development",
  },
  {
    active: true,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Write Unit Tests",
    taskDescription: "Write Jest test cases.",
    taskDate: "2026-07-16",
    category: "Testing",
  },
],
  },

  {
    id: 4,
    firstName: "Rohan",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
   tasks: [
  {
    active: true,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Build Profile Page",
    taskDescription: "Develop employee profile page.",
    taskDate: "2026-07-10",
    category: "Frontend",
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Fix Navbar",
    taskDescription: "Resolve responsive navbar issues.",
    taskDate: "2026-07-08",
    category: "Bug Fix",
  },
  {
    active: false,
    newTask: false,
    completed: false,
    failed: true,
    taskTitle: "Email Integration",
    taskDescription: "Configure email notification service.",
    taskDate: "2026-07-04",
    category: "Backend",
  },
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Refactor Components",
    taskDescription: "Improve reusable React components.",
    taskDate: "2026-07-12",
    category: "Development",
  },
],
  },

  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
  {
    active: true,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Design Logo",
    taskDescription: "Create a new logo for the project.",
    taskDate: "2026-07-09",
    category: "Design",
  },
  {
    active: false,
    newTask: false,
    completed: true,
    failed: false,
    taskTitle: "Prepare Presentation",
    taskDescription: "Prepare project presentation slides.",
    taskDate: "2026-07-08",
    category: "Presentation",
  },
  {
    active: true,
    newTask: false,
    completed: false,
    failed: false,
    taskTitle: "Client Meeting",
    taskDescription: "Attend project discussion with client.",
    taskDate: "2026-07-11",
    category: "Meeting",
  },
  {
    active: false,
    newTask: false,
    completed: false,
    failed: true,
    taskTitle: "Performance Testing",
    taskDescription: "Run load testing on the application.",
    taskDate: "2026-07-06",
    category: "Testing",
  },
  {
    active: true,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle: "Update UI",
    taskDescription: "Improve user interface based on feedback.",
    taskDate: "2026-07-13",
    category: "UI/UX",
  },
],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = ()=>{
    if (typeof window === 'undefined') return

    // सिर्फ पहली बार data set करो, अगर पहले से है तो overwrite मत करो
    if (!localStorage.getItem('employees')) {
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