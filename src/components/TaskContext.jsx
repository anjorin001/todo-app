import useLocalStorage from '@/hooks/localStorageHooks'
import React, { useState } from "react";
import { createContext } from "react";
export const Task = createContext();

const TaskContext = ({ children }) => {
  // All state for adding task
  const [completedTask, setCompletedTask] = useLocalStorage( "completedTask",[]);
  const [AllTasks, setAllTasks] = useLocalStorage("AllTasks",{});
  const [tasks, setTasks] = useLocalStorage("tasks",{
    "task-page1": [],
    "task-page2": [],
    "task-page3": [],
    "task-page4": [],
    "alltask-page": [],
  });

  const [taskValue, setTaskValue] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [fadingTaskId, setFadingTaskId] = useState(null);

  // all state for editing task
  const [presentTaskValue, setPresentTaskValue] = useState("");
  const [presentTaskDate, setPresentTaskDate] = useState("");
  const [presentTaskTime, setPresentTaskTime] = useState("");
  const [defaultValue, setDefaultValue] = useState({
    Taskvalue: "",
    DateValue: "",
    TimeValue: "",
  });

  return (
    <>
      {/* responsible sharing all state to all component who needs it */}
      <Task.Provider
        value={{
          tasks,
          setTasks,
          AllTasks,
          setAllTasks,
          taskValue,
          setTaskValue,
          taskDate,
          setTaskDate,
          taskTime,
          setTaskTime,
          presentTaskValue,
          setPresentTaskValue,
          presentTaskDate,
          setPresentTaskDate,
          presentTaskTime,
          setPresentTaskTime,
          defaultValue,
          setDefaultValue,
          completedTask,
          setCompletedTask,
          fadingTaskId,
          setFadingTaskId
        }}
      >
        {children}
      </Task.Provider>
    </>
  );
};

export default TaskContext;
