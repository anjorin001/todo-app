import React, { useState } from "react";
import { createContext } from "react";
export const Task = createContext();
const TaskContext = ({ children }) => {
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
     
  return (
    <>
      <Task.Provider value={{ tasks, setTasks, AllTasks, setAllTasks, taskValue, setTaskValue, taskDate,setTaskDate,taskTime,setTaskTime }}>
        {children}
      </Task.Provider>
    </>
  );
};

export default TaskContext;
