import React, { useEffect } from "react";
import { useContext } from "react";
import { Task } from "./TaskContext";


export const CompletedTask = ({taskId, page, deletePage}) => {
  const {setTasks,tasks,setCompletedTask, setFadingTaskId } = useContext(Task);


  const handleMarkTask = () => {
    setFadingTaskId(taskId);
    if (page === "alltask-page") {
      setTimeout(() => {
        setTasks((prevTask) => ({
        ...prevTask,
        [deletePage]: prevTask[deletePage].filter((task) => task.id !== taskId),
        }));
        setFadingTaskId(null);
      },500)
    } else {
      setTimeout(() => {
        setTasks((prevTask) => ({
        ...prevTask,
        [page]: prevTask[page].filter((task) => task.id !== taskId)
        }));
        setFadingTaskId(null);
      },500);
    }
    const taskToAdd = deletePage ? tasks[deletePage].find((task) => task.id === taskId) : tasks[page].find((task) => task.id === taskId)
    
    setCompletedTask((prevCTask) => [
      ...prevCTask, { id: taskToAdd.id, text: taskToAdd.text, date: taskToAdd.date, time: taskToAdd.time, completed: true, page: taskToAdd.page }
    ]
    );    
  };
  

  useEffect(() => {
    handleMarkTask()
  },[taskId, page])

  return null ;
};
