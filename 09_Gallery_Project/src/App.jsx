import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from './component/Card'

function App() {

  const [userData, setuserData] = useState([])

  const [index, setindex] = useState(1)

  const getData = async() => {
    const response =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setuserData(response.data)
  }

  useEffect(()=>{
    getData()
  },[index])

  let printuserdata = (
  <div className="h-[calc(90vh-150px)] flex items-center justify-center">
    <h3 className="text-gray-400">LOADING...</h3>
  </div>
);  

  if(userData.length>0){
    printuserdata = userData.map(function (elem,idx) {
      return <Card elem={elem} idx = {idx}/>
    })
  }

  return (
    <div className='bg-black h-screen text-white overflow-auto'>
      <h1 className='fixed font-bold text-5xl bg-red-900 px-3 py-3'>{index}</h1>
      
      <h1 className='font-bold text-center text-4xl py-5 mb-5'>Gallery Project</h1>
      
      {/* <div className="flex justify-center">
        <button
          className="bg-amber-50 active:scale-95 px-5 py-2 rounded text-black m-5"
          onClick={getData}
        >
          Get Data
        </button>
      </div> */}

      <div className='flex flex-wrap gap-4 justify-center'>
          {printuserdata}
      </div>

      <div className='flex justify-center items-center gap-6 p-10'>
        <button 
        className='bg-amber-400 text-black text-lg px-4 py-2 border rounded-xl cursor-pointer active:scale-95'
        onClick={() => {
          setindex(index > 1 ? index - 1 : 3);
          setuserData([])
        }}
        >Prev</button>

        <h4>Page {index}</h4>

        <button 
        className='bg-amber-400 text-black text-lg px-4 py-2 border rounded-xl cursor-pointer active:scale-95'
        onClick={()=>{
          console.log('Next button clicked...');
          // setindex(index < 3 ? index + 1 : 1);
          setindex(index + 1);
          setuserData([])
        }}
        >Next</button>
      </div>
      

    </div>
  )
}

export default App