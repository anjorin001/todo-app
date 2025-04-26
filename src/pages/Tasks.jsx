import React, { useState } from "react";
import { House } from "lucide-react";
import Addtask from "@/components/Addtask";
import { useContext } from "react";
import { Task } from "@/components/TaskContext";
import { Checkbox } from "@/components/ui/checkbox";
import { useRef } from "react";
import { useEffect } from "react";
const Tasks = () => {
  const { AllTasks } = useContext(Task);
  const page = 'alltask-page'
  const lines = Array.from({ length: AllTasks.length + 7 });
  const [idHolder, setIdHolder] = useState({
      id: null,
      type: null,
    })
  
    const handleIdPass = (e, id, type) => {
      e.preventDefault();
      setIdHolder({ id, type })
      setMenu({ ...menu, visible: false });
    }
    if (idHolder.type === 'check'||idHolder.type === 'delete' ||idHolder.type === 'edit') {
      console.log(`type: ${idHolder.type} id: ${idHolder.id}`);
    }
    // HERE BELOW IS THE CONTEXT_MENUE CODE GUYS
    const [menu, setMenu] = useState({
      visible: false,
      x: 0,
      y: 0,
      todoId: null
    });
    const menuRef = useRef();
    const handleContextMenu = (e, todoId) => {
      e.preventDefault();
      setMenu({
        visible: true,
        x: e.clientX,
        y: e.clientY,
        todoId
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
  
  // ENDING OF MENUE 
  return (
    <div className="main-content">
      <main className="task-content">
        <h1 className="heading">
          <House className="house" /> Tasks
        </h1>
        <div className="task-scroll-container ">
          <ul className="task-list">
            {lines.map((_, i) => (
              <li key={i} className="task-line">
                {AllTasks[i] ? (
                  <div className="task-display-container"  onContextMenu={(e) => handleContextMenu(e, AllTasks[i].id)}>
                    <div className="task-value">
                      <div onClick={(e) => handleIdPass(e,AllTasks[i].id,'check')}><Checkbox/></div>
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
            <div onClick={(e) => handleIdPass(e, menu.todoId, 'edit')}>Edit</div>
            <p className="separator"></p>
          <div onClick={(e) =>  handleIdPass(e,menu.todoId,'delete')}>Delete</div>
        </div>
      )}
        {/* ADDTASK INPUT */}
        <div className="bottom-add-task-input">
          <Addtask currentPage={page} />
        </div>
      </main>
    </div>
  );
};

export default Tasks;
