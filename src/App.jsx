import React from 'react'
import TaskContext from './components/TaskContext'
import Example from './Example'
const App = () => {
  return (
    <div>
      <TaskContext>
        <Example/>
      </TaskContext>
    </div>
  )
}

export default App

// import React from 'react'
// import { Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
// import TaskContext from './components/TaskContext';
// import AssignedToMe from './pages/AssignedToMe';
// import Important from './pages/Important';
// import MyDay from './pages/MyDay';
// import Planned from './pages/Planned';
// import Tasks from './pages/Tasks';
// const App = () => {
//   return (
//     <>
//           {/* TaskContext here is a usecontext allowing all components to have access-- read NOTE file */}
//         <TaskContext>
//           {/* all routes,route and component instances should be placed here */}
          
//              <Navbar/>
//                <Routes>
//                   <Route path='/assigned-to-me' element={<AssignedToMe/>}/>
//                   <Route path='/important' element={<Important/>}/>
//                   <Route path='/my-day' element={<MyDay/>}/>
//                   <Route path='/planned' element={<Planned/>}/>
//                   <Route path='/tasks' element={<Tasks/>}/>
//                </Routes>
          
//         </TaskContext>
//     </>
//   )
// }

// export default App