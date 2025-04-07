import React from "react";

const Delete = ({taskId}) => {

    const handleDelete = (e, page) => {
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