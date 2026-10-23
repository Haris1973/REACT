import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import CompleteTask from '../TaskList/CompleteTask'
import NewTask from '../TaskList/NewTask'
import FailedTask from '../TaskList/FailedTask'

function TaskList({ data }) {
  console.log(data)

  return (
    <div
      id="TaskList"
      className="h-[400px] flex items-center justify-start gap-8 w-full overflow-x-auto mt-10"
    >
      {/* ADDED ? after data and tasks to prevent the mapping crash */}
      {data?.tasks?.map((e, index) => (
        <React.Fragment key={index}>
          {e.active && <AcceptTask data={e} />}
          {e.newTask && <NewTask data={e} />}
          {e.completed && <CompleteTask data={e} />}
          {e.failed && <FailedTask data={e} />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default TaskList