import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

function AdminDashboard({data , changeUser }) {
  return (
    <div className='p-5 bg-[#1C1C1C] text-white min-h-screen'>
        <Header changeUser = {changeUser} data = {data}/>
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard