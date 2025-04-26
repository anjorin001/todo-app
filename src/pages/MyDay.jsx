import React from "react";
import { Sun } from "lucide-react";
import Addtask from "@/components/Addtask";
import { useContext } from "react";
import { Task } from "@/components/TaskContext";
const MyDay = () => {
  const { tasks } = useContext(Task);
  const page = "task-page1";
  const lines = Array.from({ length: tasks[page].length + 7 });
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="main-content">
      <main className="task-content">
        {/* heading */}
        <h1 className="heading">
          <Sun className="sun" /> MyDay
        </h1>
        <span>{today}</span>
        <div className="task-scroll-container ">
          <ul className="task-list">
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
          </ul>
        </div>
        {/* ADDTASK INPUT */}
        <div className="bottom-add-task-input">
          <Addtask currentPage={page} />
        </div>
      </main>
    </div>
  );
};

export default MyDay;
