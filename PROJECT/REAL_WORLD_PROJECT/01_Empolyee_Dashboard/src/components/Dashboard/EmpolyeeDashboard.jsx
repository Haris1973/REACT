import React from 'react'
import Header from '../other/Header'
import TaskCards from '../other/TaskCards'
import TaskList from '../other/TaskList'

function EmpolyeeDashboard() {
  return (
    <div className='p-5 bg-[#1C1C1C] text-white min-h-screen'>
        <Header />
        <TaskCards />
        <TaskList />
    </div>
  )
}

export default EmpolyeeDashboard