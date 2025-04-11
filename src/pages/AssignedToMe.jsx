import React from 'react'
import { CircleUserRound } from "lucide-react";

const AssignedToMe = () => {
  return (
    <div className='main-content'>
       <main className="task-content">
        <h1 className='heading'>
         <CircleUserRound className='circleUser'/> Assigned
        </h1>
        <div>
          {/* Sam map in here! */}
        </div>
      </main>
    </div>
  )
}

export default AssignedToMe