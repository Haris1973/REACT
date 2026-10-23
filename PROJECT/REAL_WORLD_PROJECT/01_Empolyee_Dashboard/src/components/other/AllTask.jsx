import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

function AllTask() {

    const authData = useContext(AuthContext)

  return (
    // Changed the background to #1C1C1C to match your dashboard theme perfectly
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded-2xl'>
       <div className='bg-indigo-600 mb-4 py-3 px-5 flex justify-between rounded-lg font-bold text-white shadow-md'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-3/5'>Employee Email</h3>
            <h5 className='w-1/5 text-center'>Completed Task Count</h5>
        </div>

        {authData.emp.map((e , index)=>{
            return <div key={index} className='bg-gray-700 mb-4 py-3 px-5 flex justify-between rounded-lg font-bold text-white shadow-md'>
                        <h2 className='w-1/5'>{e.name}</h2>
                        <h3 className='w-3/5'>{e.email}</h3>
                        <h5 className='w-1/5 text-center'>{e.taskNumbers.completed}</h5>
                    </div>
            })}
    </div>
  )
}

export default AllTask