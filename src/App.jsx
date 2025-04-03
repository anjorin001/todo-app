import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TaskContext from './components/TaskContext';
const App = () => {
  return (
    <>
      {/* TaskContext here is a usecontext allowing all components to have access-- read NOTE file */}
      <TaskContext>
        {/* all routes,route and component instances should be placed here */}
       <Navbar/>
     </TaskContext>
    </>
  )
}

export default App