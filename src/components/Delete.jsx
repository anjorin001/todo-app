import React from "react";
import { Task } from './TaskContext'

const Delete = ({taskId, page}) => {

    const {tasks, setTasks} = React.useContext(Task)

    const handleDelete = (e) => {
        e.preventDefault()
        setTasks((prevTask) => ({
            ...prevTask,
            [page]: prevTask[page].filter((task) => task.id !== taskId)
        }))
    }
    
return(
  <></>
)
}

export default Delete