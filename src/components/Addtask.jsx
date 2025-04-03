import React, { useEffect, useState } from 'react'

const Addtask = ({ currentPage }) => {
    const [AllTasks, setAllTasks ] = useState([])
    const [taskValue, setTaskValue] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskTime, setTaskTime] = useState('')
    const [tasks, setTasks] = useState({
        "task-page1": [],
        "task-page2": [],
        "task-page3": [],
        "task-page4": [],
        "completed-task":[],
    })
    
    const handleSubmit = (e, page, newTaskText, newTaskDate, newTaskTime) => {
        e.preventDefault()
        setTasks((prevTasks) => ({
            ...prevTasks,
            [page]: [...prevTasks[page] || [],  {id: Date.now(), text: newTaskText, date: newTaskDate, time: newTaskTime, completed: false }]
        }))
        setTaskValue('');
        setTaskTime('');
        setTaskDate('');
    }

    useEffect(() => {
        const AllTasks = Object.values(tasks).flat()
        setAllTasks(AllTasks)
    }, [tasks])
    // ill get my currentpage value by passing it as a prop on each pages currentpage = {page}
    // work on edit task
  return (
      <>
          <div>
              <form action="" onSubmit={(e) => handleSubmit(e, currentPage,taskValue, taskDate, taskTime )}>
                  <input type="text" value={taskValue} placeholder='Type something "Pay Utilites bill by friday 2pm" ' onChange={(e) => setTaskValue(e.target.value)} required/>
                  <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} required />
                  <input type="time" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} required/>
                  <button type='submit'>Add task</button>
              </form>
        </div>
      </>
  )
}

export default Addtask