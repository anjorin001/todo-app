import React from "react";
import { House } from "lucide-react";
import Addtask from "@/components/Addtask";
import { useContext } from "react";
import { Task } from "@/components/TaskContext";
const Tasks = () => {
  const { tasks } = useContext(Task);
  const page = 'alltask-page'
  const lines = Array.from({ length: tasks[page].length + 7 });
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="main-content">
      <main className="task-content">
        <h1 className="heading">
          <House className="house" /> Tasks
        </h1>
        <span>{today}</span>
        <div className="task-scroll-container">{ <ul className="task-list">
            {lines.map((_, i) => (
              <li key={i} className="task-line">
                {tasks[page][i] ? (
                  <>
                    <p>{tasks[page][i].text}</p>
                    <p>
                      {tasks[page][i].date}  {tasks[page][i].time}
                    </p>
                  </>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>}</div>
        {/* ADDTASK INPUT */}
        <div className="bottom-add-task-input">
          <Addtask currentPage={page} />
        </div>
      </main>
    </div>
  );
};

export default Tasks;
