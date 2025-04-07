import React from 'react'
import { Task } from './TaskContext'
import { useContext } from 'react'
import { useEffect } from 'react'
const Addtask = ({ currentPage }) => {
    const { tasks, setTasks, AllTasks, setAllTasks, taskValue, setTaskValue, taskDate, setTaskDate, taskTime, setTaskTime } = useContext(Task)
    // responsible for updating our task state
    const handleSubmit = (e, page, TaskText, TaskDate, TaskTime) => {
        e.preventDefault()
        setTasks((prevTasks) => ({
            ...prevTasks,
            [page]: [...prevTasks[page] || [],  {id: Date.now(), text: TaskText, date: TaskDate, time: TaskTime, completed: false }]
        }))
        setTaskValue('');
        setTaskTime('');
        setTaskDate(''); 
    }
      //reponsible for updating all-task state 
    useEffect(() => {
        const AllTasks = Object.values(tasks).flat()
        setAllTasks(AllTasks)
    }, [tasks])

  return (
      <>
          {/* form to accept user information */}
          <div>
              <form action="" onSubmit={(e) => handleSubmit(e, currentPage,taskValue, taskDate, taskTime )}>
                  <input type="text" value={taskValue} placeholder='Type something "Pay Utilites bill by friday 2pm" ' onChange={(e) => setTaskValue(e.target.value)} required/>
                  <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} required />
                  <input type="time" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} required />
                  <button type='submit'>Add task</button>
              </form>
          </div>

      </>

  )
}

export default Addtask