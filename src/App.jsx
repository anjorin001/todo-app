import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TaskContext from './components/TaskContext';
import AuthContext from './auth/AuthContext';
import Signup from './auth/Signup';
import Login from './auth/Login';
const App = () => {
  return (
    <>
      {/* TaskContext here is a usecontext allowing all components to have access-- read NOTE file */}
      <AuthContext>
        <TaskContext>
        {/* all routes,route and component instances should be placed here */}
          <Navbar />
        </TaskContext>
      </AuthContext>
    </>
  )
}

export default App