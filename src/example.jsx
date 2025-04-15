import React, { useState, useContext } from "react";
import { Task } from "./components/TaskContext";
import Addtask from "./components/Addtask";
import EditTask from "./components/EditTask";

const Example = () => {
    const { tasks } = useContext(Task);
    const [page, setPage] = useState("task-page1");
    const [editingTaskId, setEditingTaskId] = useState(null);
    const handleEdit = (e, id) => {
        e.preventDefault();
        setEditingTaskId(id); // Store the ID of the task to edit
    };

    return (
        <div>
            {tasks[page].map((task) => (
                <div key= { task.id } >
                    <p>{task.text}</p>
                    <p>{task.date} - {task.time}</p>
                    <button onClick={(e) => handleEdit(e, task.id)} style={{ backgroundColor: 'brown' }}>
                        Edit
                    </button>
                </div>
            ))}
            

            {/* Show EditTask only when a task is being edited */}
            {editingTaskId && <EditTask taskId={editingTaskId} currentPage={page} />}
            
            <Addtask currentPage={page} />
        </div>
    );
};

export default Example;