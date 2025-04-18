import React from "react";
import { Columns3 } from "lucide-react";
import Addtask from "@/components/Addtask";
import { useContext } from "react";
import { Task } from "@/components/TaskContext";
const Planned = () => {
    const { tasks } = useContext(Task);
    const page = "task-page3";
  return (
    <div className="main-content">
      <main className="task-content">
        <h1 className="heading">
          <Columns3 className="column" /> Planned
        </h1>
        <div className="task-scroll-container ">
          {/* Sam map in here! */}
        </div>
         {/* ADDTASK INPUT */}
         <div className="bottom-add-task-input">
          <Addtask currentPage={page} />
        </div>
      </main>
    </div>
  );
};

export default Planned;
