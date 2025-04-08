import React, { useEffect } from 'react'
import { Task } from './TaskContext'
import { useContext } from 'react'
const EditTask = ({taskId, currentPage}) => {
    const { setTasks, tasks } = useContext(Task)
    const { presentTaskValue, setPresentTaskValue, presentTaskDate, setPresentTaskDate, presentTaskTime, setPresentTaskTime, defaultValue, setDefaultValue } = useContext(Task)
//    responsible for showing default values before editing task
    const handleDefaultValue = () => {
        const taskToEdit = tasks[currentPage].find(task => task.id === taskId);
    
        if (taskToEdit) {
            setDefaultValue({
                Taskvalue: taskToEdit.text,
                DateValue: taskToEdit.date,
                TimeValue: taskToEdit.time,
            });
        }
    };
    useEffect(() => {
        handleDefaultValue()
    }, [taskId])
    
// responsible for editing added task by making use of the id
    const handleEdit = (e, page, newTaskText, newTaskDate, newTaskTime) => {
        e.preventDefault()
        setTasks((prevTask) => ({
            ...prevTask,
            [page]: prevTask[page].map((task) => (
                task.id === taskId ? { ...task, text: newTaskText || task.text, date: newTaskDate || task.date, time: newTaskTime || task.time, completed: false} : task
            )) 
        }))

        setDefaultValue({
            Taskvalue: '' ,
            DateValue:'' ,
            TimeValue:'' ,
          })
       
    }
  return (
      <>
          {/* form for requesting new task info  */}
          <form action="" onSubmit={(e) => handleEdit(e, currentPage,presentTaskValue, presentTaskDate, presentTaskTime )}>
                  <input type="text" defaultValue={defaultValue.Taskvalue}  placeholder='Type something "Pay Utilites bill by friday 2pm" ' onChange={(e) => setPresentTaskValue(e.target.value)} required/>
                  <input type="date" defaultValue={defaultValue.DateValue} onChange={(e) => setPresentTaskDate(e.target.value)} required />
                  <input type="time" defaultValue={defaultValue.TimeValue} onChange={(e) => setPresentTaskTime(e.target.value)} required />
                  <button type='submit'>save</button>
         </form>
    </>
  )
}

export default EditTask
