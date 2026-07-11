import React, { useState, useEffect } from "react"
import Header from "../other/Header"
import TaskListNumbers from "../other/TaskListNumbers"
import TaskList from "../TaskList/TaskList"

const EmployeeDeshboard = (props)=>{
    const [employeeData, setEmployeeData] = useState(props.data)
    
    
    useEffect(() => {
        const interval = setInterval(() => {
            const loggedInUser = localStorage.getItem('loggedInUser')
            if (loggedInUser) {
                const userData = JSON.parse(loggedInUser)
                if (userData.data) {
                    setEmployeeData(userData.data)
                }
            }
        }, 500)
        
        return () => clearInterval(interval)
    }, [])
    
    return (
        
            <div className="p-10 bg-[#1C1C1C] h-screen">
                <Header changeUser = {props.changeUser} data = {employeeData} />
                <TaskListNumbers data = {employeeData} />
                <TaskList data = {employeeData} />
            </div>
        
    )
}

export default EmployeeDeshboard