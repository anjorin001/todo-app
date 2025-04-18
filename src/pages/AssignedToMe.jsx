import React from "react";
import { CircleUserRound } from "lucide-react";
import Addtask from "@/components/Addtask";
import { useContext } from "react";
import { Task } from "@/components/TaskContext";
const AssignedToMe = () => {
    const { tasks } = useContext(Task);
    const page = "task-page4";
  return (
    <div className="main-content">
      <main className="task-content">
        <h1 className="heading">
          <CircleUserRound className="circleUser" /> Assigned
        </h1>
        <div className="task-scroll-container ">{/* Sam map in here! */}</div>
        <div className="bottom-add-task-input">
          <Addtask currentPage={page} />
        </div>
      </main>
    </div>
  );
};

export default AssignedToMe;
