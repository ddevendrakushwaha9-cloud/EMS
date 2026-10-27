import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data, employeeEmail, onTaskStatusChange}) => {
  return (
    <>
    
    <div id='taskList' className="flex h-[50%] overflow-x-auto gap-5 flex-nowrap justify-start items-center mt-10">
        {data.tasks.map((elem, idx)=>{
            if(elem.active){
                return <AcceptTask
                    key={idx}
                    data={elem}
                    onComplete={() => onTaskStatusChange(employeeEmail, idx, 'completed')}
                    onFail={() => onTaskStatusChange(employeeEmail, idx, 'failed')}
                />
            }
            if(elem.newTask){
                return <NewTask
                    key={idx}
                    data={elem}
                    onAccept={() => onTaskStatusChange(employeeEmail, idx, 'active')}
                />
            }
            if(elem.completed){
                return <CompleteTask key={idx} data= {elem}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data= {elem}/>
            }
            return null
        })}

    </div>
    </>
  )
}

export default TaskList