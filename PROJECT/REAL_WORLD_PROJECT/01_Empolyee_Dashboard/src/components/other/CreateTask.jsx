import { useState } from "react";


function  CreateTask() {
    // 1. Create state for all form fields
    //  eslint-disable-next-line
    const [NewTask, setNewTask] = useState({})
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        setNewTask({taskTitle,taskDate,assignTo,category,taskDescription})
        // You can now access all your form data here!
        const newTask = {
            taskTitle,
            taskDate,
            assignTo,
            category,
            taskDescription
        };
        console.log('Form Submitted with data:', newTask);

        // Optional: Clear the form after submitting
        setTaskTitle('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');
        setTaskDescription('');


        console.log('hello')

        const data = JSON.parse(localStorage.getItem('employees'));

        data.forEach((elem) => {
            if(assignTo == elem.name){
                elem.tasks.push(newTask)
                console.log(elem.tasks)
            }    
        });


    }

  return (
    <div className='mt-10 max-w-4xl mx-auto bg-[#2c2c2c] p-8 rounded-xl shadow-lg'>
        <form
        onSubmit={submitHandler}
        className='flex flex-wrap lg:flex-nowrap gap-10 w-full'>
            <div className='w-full lg:w-1/2 flex flex-col gap-5'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
                    <input 
                        // 2. Bind state and add onChange function
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        type="text" 
                        placeholder='Make a UI Design' 
                        className='w-full bg-transparent border border-gray-600 p-3 text-white placeholder-gray-500 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                    />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
                    <input 
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                        type="date" 
                        className='w-full bg-transparent border border-gray-600 p-3 text-gray-400 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                    />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-1'>Assign To</h3>
                    <input 
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                        type="text" 
                        placeholder='Employee Name' 
                        className='w-full bg-transparent border border-gray-600 p-3 text-white placeholder-gray-500 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                    />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
                    <input 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        type="text" 
                        placeholder='Design, Dev, etc.' 
                        className='w-full bg-transparent border border-gray-600 p-3 text-white placeholder-gray-500 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' 
                    />
                </div>
            </div>
            
            <div className='w-full lg:w-1/2 flex flex-col gap-5'>
                <div className='flex-grow'>
                    <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
                    <textarea 
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        rows="8" 
                        className='w-full h-full bg-transparent border border-gray-600 p-3 text-white placeholder-gray-500 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none' 
                        placeholder='Enter task description...'
                    ></textarea>
                </div>

                <button className='bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors w-full mt-4'>
                    Create Task
                </button>
            </div>
            
        </form>
    </div>
  )
}

export default CreateTask