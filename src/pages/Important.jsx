import React from 'react'
import { Star } from 'lucide-react';
import Addtask from "@/components/Addtask";
import { Task } from "@/components/TaskContext";
import { useContext } from 'react';
export const Important = () => {
   const { tasks } = useContext(Task);
   const page = "task-page2";
   const lines = Array.from({ length: tasks[page].length + 7 });
   const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className='main-content'>
       <main className="task-content">
        <h1 className='heading'>
         <Star className='star'/>  Important
        </h1>
        <span>{today}</span>
        <div className="task-scroll-container ">
          { <ul className="task-list">
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
          </ul>}
        </div>
         {/* ADDTASK INPUT */}
         <div className="bottom-add-task-input">
          <Addtask currentPage={page} />
        </div>
      </main>
    </div>
  )
}

export default Important