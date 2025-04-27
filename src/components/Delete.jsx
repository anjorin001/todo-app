import React, { useEffect, useContext } from "react";
import { Task } from "./TaskContext";

const Delete = ({ taskId, page, deletePage }) => {
  const { setTasks } = useContext(Task);

  const handleDelete = () => {
      if (page === "alltask-page") {
        setTasks((prevTasks) => ({
            ...prevTasks,
            [deletePage]: prevTasks[deletePage].filter((task) => task.id !== taskId),
        }));
      } else {
                setTasks((prevTasks) => ({
        ...prevTasks,
        [page]: prevTasks[page].filter((task) => task.id !== taskId),
      }));
    }
  };

  useEffect(() => {
    handleDelete();
  }, [taskId, page]);

  return null;
};

export default Delete;
