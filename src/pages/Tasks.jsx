import React, { useState } from "react";
import { House } from "lucide-react";
import { Trash2 } from 'lucide-react';
import Addtask from "@/components/Addtask";
import { useContext } from "react";
import { Task } from "@/components/TaskContext";
import { Checkbox } from "@/components/ui/checkbox";
import { useRef } from "react";
import { useEffect } from "react";
import Delete from "@/components/Delete";
import EditTask from "@/components/EditTask";
import { CompletedTask } from "@/components/CompletedTask";

const Tasks = () => {
  const { AllTasks, completedTask, setCompletedTask, fadingTaskId} = useContext(Task);
  const page = 'alltask-page'
  const AllTasklines = Array.from({ length: AllTasks.length + 3 });
  const completedTaskLines = Array.from({ length: completedTask.length + 0 });

  const handleClearCompleted = (e) => {
    e.preventDefault()
    setCompletedTask([])
  }
  const [idHolder, setIdHolder] = useState({
      id: null,
      type: null,
      manipulatePage: null
    })
  
    const handleIdPass = (e, id, type, manipulatePage) => {
      e.preventDefault();
      setIdHolder({ id, type, manipulatePage })
      setMenu({ ...menu, visible: false });
    }

    // HERE BELOW IS THE CONTEXT_MENUE CODE GUYS
    const [menu, setMenu] = useState({
      visible: false,
      x: 0,
      y: 0,
      todoId: null,
      manipulatePage:null
    });
    const menuRef = useRef();
    const handleContextMenu = (e, todoId, manipulatePage) => {
      e.preventDefault();
      setMenu({
        visible: true,
        x: e.clientX,
        y: e.clientY,
        todoId,
        manipulatePage
      });
    };
    
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenu({ ...menu, visible: false });
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  
  console.log({
    id: idHolder.id,
    deletePage: idHolder.manipulatePage
  })
  
  // ENDING OF MENUE 
  return (
    <div className="main-content">
      <main className="task-content">
        <h1 className="heading">
          <House className="house" /> Tasks
        </h1>
        <div className="task-scroll-container ">
          <ul className="task-list">
            {AllTasklines.map((_, i) => (
              <li key={i} className="task-line">
                {AllTasks[i] ? (
                  <div className={`task-display-container ${fadingTaskId === AllTasks[i].id ? 'fade-out' : ''}`}  onContextMenu={(e) => handleContextMenu(e, AllTasks[i].id, AllTasks[i].page)}>
                    <div className="task-value">
                      <div onClick={(e) => handleIdPass(e,AllTasks[i].id,'check', AllTasks[i].page)}><Checkbox checked={AllTasks[i].completed}/></div>
                      <p>
                        {AllTasks[i].text}
                      </p>
                    </div>
                    <div className="task-time">
                      <p>
                        {AllTasks[i].time} {AllTasks[i].time && AllTasks[i].date ? '•' : '' } {AllTasks[i].date}  
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
          {completedTask.length > 0 ? <div className="completed-sec">Completed <button title="clear completed tasks" onClick={handleClearCompleted} className="trash"><Trash2/></button> :</div> : null}
          {/* COMPLETED TASKS */}
          <ul className="task-list">
            {completedTaskLines.map((_, i) => (
              <li key={i} className="task-line">
                {completedTask[i] ? (
                  <div className="task-display-container">
                    <div className="task-value">
                      <p className="completed">
                        {completedTask[i].text}
                      </p>
                    </div>
                    <div className="task-time">
                      <p className="completed">
                        {completedTask[i].time} {completedTask[i].time && completedTask[i].date ? '•' : '' } {completedTask[i].date}  
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* CONTEXT MENUE-TRIGGER */}
        {menu.visible && (
        <div
          ref={menuRef}
          className={`context-menu ${menu.visible ? 'visible' : ''}`}
          style={{
            position: 'absolute',
            left: `${menu.x}px`,
            top: `${menu.y}px`,
          }}
        >
            <div onClick={(e) => handleIdPass(e, menu.todoId, 'edit', menu.manipulatePage)}>Edit</div>
            <p className="separator"></p>
          <div onClick={(e) =>  handleIdPass(e,menu.todoId,'delete',menu.manipulatePage)}>Delete</div>
        </div>
        )}
         {/* DELETE AND EDIT AND COMPLETE LOGIC */}
        {idHolder.type === 'delete' && <Delete taskId={idHolder.id} page={page} deletePage={idHolder.manipulatePage} /> }
        {idHolder.type === 'edit' && <EditTask taskId={idHolder.id} currentPage={page} deletePage={idHolder.manipulatePage} onClose={() => setIdHolder({ id: null })} />}
        {idHolder.type === 'check' &&  <CompletedTask taskId={idHolder.id} page={page} deletePage={idHolder.manipulatePage} />}
        {/* ADDTASK INPUT */}
        <div className="bottom-add-task-input">
          <Addtask currentPage={page} />
        </div>
      </main>
    </div>
  );
};
export default Tasks;
