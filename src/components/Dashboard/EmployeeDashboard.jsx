import React, { useContext } from "react"
import Header from "../Auth/other/Header"
import TaskListNumbers from "../Auth/other/TaskListNumbers"
import TaskList from "../TaskList/TaskList"
import { AuthContext } from "../../context/AuthContext"

const EmployeeDeshboard = (props)=>{
    const authData = useContext(AuthContext)
    const employeeEmail = props.data?.email
    const employeeData = authData.employees.find((employee) => employee.email === employeeEmail) || props.data

    const handleTaskStatusChange = (email, taskIndex, nextStatus) => {
        try {
            authData.updateTaskStatus(email, taskIndex, nextStatus)
        } catch (error) {
            window.alert(error.message)
        }
    }
    
    return (
        
            <div className="p-10 bg-[#1C1C1C] h-screen">
                <Header changeUser = {props.changeUser} data = {employeeData} />
                <TaskListNumbers data = {employeeData} />
                <TaskList data = {employeeData} employeeEmail={employeeEmail} onTaskStatusChange={handleTaskStatusChange} />
            </div>
        
    )
}

export default EmployeeDeshboard