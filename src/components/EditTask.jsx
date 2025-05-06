import React, { useEffect, useState } from "react";
import { Task } from "./TaskContext";
import { useContext } from "react";

const EditTask = ({ taskId, currentPage, onClose }) => {
  const { setTasks, tasks } = useContext(Task);
  const {
    presentTaskValue,
    setPresentTaskValue,
    presentTaskDate,
    setPresentTaskDate,
    presentTaskTime,
    setPresentTaskTime,
    defaultValue,
    setDefaultValue,
  } = useContext(Task);
  
  const [isVisible, setIsVisible] = useState(true);

  // Responsible for showing default values before editing task
  const handleDefaultValue = () => {
    const taskToEdit = tasks[currentPage].find((task) => task.id === taskId);
    if (taskToEdit) {
      setDefaultValue({
        Taskvalue: taskToEdit.text,
        DateValue: taskToEdit.date,
        TimeValue: taskToEdit.time,
      });
    }
  };

  useEffect(() => {
    handleDefaultValue();
  }, [taskId, currentPage]);

  // Responsible for editing added task by making use of the id
  const handleEdit = (e, page, newTaskText, newTaskDate, newTaskTime) => {
    e.preventDefault();
    setTasks((prevTask) => ({
      ...prevTask,
      [page]: prevTask[page].map((task) =>
        task.id === taskId
          ? {
              ...task,
              text: newTaskText || task.text,
              date: newTaskDate || task.date,
              time: newTaskTime || task.time,
              completed: false,
            }
          : task
      ),
    }));

    setDefaultValue({
      Taskvalue: "",
      DateValue: "",
      TimeValue: "",
    });

    // Closing the form after saving
    setIsVisible(false);
    if (onClose) onClose();
  };

  // Closing when clicking outside the form
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
        if (onClose) onClose();
    setDefaultValue({
        Taskvalue: "",
        DateValue: "",
        TimeValue: "",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="edit-form-overlay" onClick={handleOverlayClick}>
      <div className="edit-form-container">
        <form
          className="edit-form"
          onSubmit={(e) =>
            handleEdit(
              e,
              currentPage,
              presentTaskValue,
              presentTaskDate,
              presentTaskTime
            )
          }
        >
          <div className="form-group">
            <input
              type="text"
              defaultValue={defaultValue.Taskvalue}
              placeholder='Type something "Pay Utilities bill by Friday 2pm"'
              onChange={(e) => setPresentTaskValue(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="datetime-group">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                defaultValue={defaultValue.DateValue}
                onChange={(e) => setPresentTaskDate(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Time</label>
              <input
                type="time"
                defaultValue={defaultValue.TimeValue}
                onChange={(e) => setPresentTaskTime(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Save Changes
            </button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => {
                setIsVisible(false);
                if (onClose) onClose();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;