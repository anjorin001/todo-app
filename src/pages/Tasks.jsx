import React from "react";
import { House } from "lucide-react";
import Addtask from "@/components/Addtask";
import { useContext } from "react";
import { Task } from "@/components/TaskContext";
const Tasks = () => {
  const { AllTasks } = useContext(Task);
  const page = 'alltask-page'
  return (
    <div className="main-content">
      <main className="task-content">
        <h1 className="heading">
          <House className="house" /> Tasks
        </h1>
        <div className="task-scroll-container">{/* Sam map in here! */}</div>
        {/* ADDTASK INPUT */}
        <div className="bottom-add-task-input">
          <Addtask currentPage={page} />
        </div>
      </main>
    </div>
  );
};

export default Tasks;
