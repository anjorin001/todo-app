import React, { useState } from "react";
import { createContext } from "react";
export const Task = createContext();
const TaskContext = ({ children }) => {
  // All state for adding task
    const [AllTasks, setAllTasks ] = useState({})
    const [taskValue, setTaskValue] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskTime, setTaskTime] = useState('')
    const [tasks, setTasks] = useState({
        "task-page1": [],
        "task-page2": [],
        "task-page3": [],
        "task-page4": [],
        "alltask-page": [],
    })
  // all state for editing task
    const [presentTaskValue, setPresentTaskValue] = useState('')
    const [presentTaskDate, setPresentTaskDate] = useState('')
    const [presentTaskTime, setPresentTaskTime] = useState('')
    const [defaultValue, setDefaultValue] = useState({
        Taskvalue: '',
        DateValue: '',
        TimeValue: '',
    });
  
  
  return (
    <>
      {/* responsible sharing all state to all component who needs it */}
      <Task.Provider value={{ tasks, setTasks, AllTasks, setAllTasks, taskValue, setTaskValue, taskDate,setTaskDate,taskTime,setTaskTime, presentTaskValue, setPresentTaskValue, presentTaskDate, setPresentTaskDate, presentTaskTime, setPresentTaskTime, defaultValue, setDefaultValue }}>
        {children}
      </Task.Provider>
    </>
  );
};

export default TaskContext;
