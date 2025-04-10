import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TaskContext from "./components/TaskContext";
import AssignedToMe from "./pages/AssignedToMe";
import Important from "./pages/Important";
import MyDay from "./pages/MyDay";
import Planned from "./pages/Planned";
import Tasks from "./pages/Tasks";
import Auth from "./auth/Auth";
const App = () => {
  return (
    <>
      {/* TaskContext here is a usecontext allowing all components to have access-- read NOTE file */}
      <TaskContext>
        {/* all routes,route and component instances should be placed here */}

        <Navbar />
        <Routes>
          <Route path="/assigned-to-me" element={<AssignedToMe />} />
          <Route path="/important" element={<Important />} />
          <Route path="/my-day" element={<MyDay />} />
          <Route path="/planned" element={<Planned />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/signup" element={<Auth />} />
        </Routes>
      </TaskContext>
    </>
  );
};

export default App;
