import React, { useEffect, useContext } from "react";
import { Task } from "./TaskContext";

const Delete = ({ taskId, page, deletePage }) => {
  const { setTasks,setFadingTaskId } = useContext(Task);

  const handleDelete = () => {
    setFadingTaskId(taskId);
    if (page === "alltask-page") {
      setTimeout(() => {
           setTasks((prevTasks) => ({
            ...prevTasks,
            [deletePage]: prevTasks[deletePage].filter((task) => task.id !== taskId),
           }));
        setFadingTaskId(null)
        },500)
    } else {
      setTimeout(() => {
        setTasks((prevTasks) => ({
        ...prevTasks,
        [page]: prevTasks[page].filter((task) => task.id !== taskId),
        }));
        setFadingTaskId(null)
      },500)
                
    }
  };

  useEffect(() => {
    handleDelete();
  }, [taskId, page]);

  return null;
};

export default Delete;
