import React from 'react'
import { Star } from 'lucide-react';

export const Important = () => {
  return (
    <div className='main-content'>
       <main className="task-content">
        <h1 className='heading'>
         <Star className='star'/>  Important
        </h1>
        <div>
          {/* Sam map in here! */}
        </div>
      </main>
    </div>
  )
}

export default Important