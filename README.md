https://chatgpt.com/canvas/shared/67ea67d7146881919b1fceb39d223f02

read throught for guide line..

EACH AND EVERY TEAM MEMEBER SHOULD GO THROUGH THIS LINK ABOVE

-------------------------------------------------------------------------------
❤️ MAIN GOAL: we are to create a todo list application with the following core aspect:

-Add tasks

-Mark tasks as completed

-Delete tasks

-Edit tasks (optional)

-Persist tasks using localStorage

-------------------------------------------------------------------------------

❤️All this will be done making use of a usestate that store input task in form of an object in array....
example:
const [tasks, setTasks] = useState({
    "task-page1": [],
    "task-page2": [],
    "completed-task":[]
});
-------------
❤️THE ADD TASK FUNC WILL BE LIKE THIS:
const addTask = (page, newTaskText) => {
    setTasks(prevTasks => ({
        ...prevTasks,
        [page]: [...prevTasks[page], { id: Date.now(), text: newTaskText, completed: false }]
    }));
};
-------------
❤️ACCEPTING TWO PARAMETERS(the task page and the task it self):
<button onclick={() => addTask("task-page1", "New Task for Page 1")}>add task</button>

-------------
❤️Which gives room for mapping through in other to display task:

{tasks["task-page2"].map((task) => (
    <div key={task.id}>
        <p>{task.text}</p>
    </div>
))}

-------------------------------------------------------------------------------
❤️ Task Breakdown & Collaboration Strategy

1️⃣ Favour: Navbar, Add Task, Edit Task
✅ The navbar should have links (e.g., Page 1, Page 2).
✅ The Add Task function should update the useState and add a new task.
✅ The Edit Task function should allow users to update the task text.
🔹 Favour needs to communicate with Sam (so tasks update properly in the UI).

-------------------------------------------------------------------------------
2️⃣ Justice: Delete Task
✅ The Delete Task function should remove a task from the state.
✅ It should confirm before deleting a task.
🔹 Justice must work with Sam to ensure the UI updates when deleting tasks.

❤️EXAMPLE:
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};

-------------------------------------------------------------------------------
3️⃣ Austin: Completed Task (Checkbox Handling)
✅ Should toggle completed: true/false when clicking the checkbox.
✅ Should apply a strike-through effect when completed.
🔹 Austin must work with Basit for proper CSS styling of completed tasks.

❤️EXAMPLE:
const toggleComplete = (id) => {
  setTasks(tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  ));
};

-------------------------------------------------------------------------------
4️⃣ Sam: Mapping Through to Display Tasks on Page 1, Page 2, etc.
✅ Should use .map() to list tasks based on page selection.
✅ Ensure only the tasks belonging to the selected page show up.
🔹 Sam needs to work with everyone since this connects all features.

❤️EXAMPLE:
tasks["page1"].map(task => <TaskItem key={task.id} {...task} />);

-------------------------------------------------------------------------------
5️⃣ Basit: CSS Styling
✅ Make sure tasks are visually clear (padding, margins, fonts).
✅ Add hover effects and transitions for UI smoothness.
✅ Style completed tasks (gray out + strikethrough).
🔹 Basit must sync with Austin for completed task styles.
-------------------------------------------------------------------------------


TAKE A LOOK AT THE END PRODUCT BELOW:
![alt text](<WhatsApp Image 2025-03-31 at 18.02.21_6a9d8462.jpg>)

-------------------------------------------------------------------------------