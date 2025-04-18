import React from 'react'
import { Star } from 'lucide-react';
import Addtask from "@/components/Addtask";
import { Task } from "@/components/TaskContext";
import { useContext } from 'react';
export const Important = () => {
   const { tasks } = useContext(Task);
   const page = "task-page2";
  return (
    <div className='main-content'>
       <main className="task-content">
        <h1 className='heading'>
         <Star className='star'/>  Important
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
  )
}

export default Important