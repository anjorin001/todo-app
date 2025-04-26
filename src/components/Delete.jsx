import React, { useState, useEffect, useContext } from "react";
import { Task } from './TaskContext';

const Delete = ({ taskId, page }) => {
    const { setTasks } = useContext(Task);

    const handleDelete = () => {
        setTasks((prevTasks) => ({
            ...prevTasks,
            [page]: prevTasks[page].filter((task) => task.id !== taskId)
        }));
    };

    useEffect(() => {
        handleDelete();
    }, [taskId, page]); 

    return null; 
};

export default Delete;
