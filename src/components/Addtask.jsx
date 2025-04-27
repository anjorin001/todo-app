import React from 'react'
import { Task } from './TaskContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Circle } from 'lucide-react';
import { Plus } from 'lucide-react';

const Addtask = ({ currentPage }) => {
    const { tasks, setTasks, AllTasks, setAllTasks, taskValue, setTaskValue, taskDate, setTaskDate, taskTime, setTaskTime } = useContext(Task)
    // responsible for updating our task state
  const handleSubmit = (e, page, TaskText, TaskDate, TaskTime) => {
    e.preventDefault()
    if (page === 'alltask-page') {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [page]: [...(prevTasks[page] || []), { id: Date.now(), text: TaskText, date: TaskDate, time: TaskTime, completed: false, page:currentPage }],
      }));
    } else {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [page]: [...prevTasks[page] || [],  {id: Date.now(), text: TaskText, date: TaskDate, time: TaskTime, completed: false, page:currentPage }]
      }))
    }
      
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
        <div className='add-task'>
            <form action="" onSubmit={(e) => handleSubmit(e, currentPage, taskValue, taskDate, taskTime)}>
               <div className='task-action'>
                   {taskValue ? <button type='submit'><Plus className='plus'/></button> : <Circle className='circle'/>}    
                  <input type="text" value={taskValue} placeholder='Type something "Pay Utilites bill by friday 2pm" ' onChange={(e) => setTaskValue(e.target.value)} required />
                </div>
                <div className='task-period'>
                   {taskValue && (
                     <>
                        <input type="time" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} />
                        <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
                     </>
                       )
                   }
                </div>
            </form>
        </div>
      </>
  )
}

export default Addtask