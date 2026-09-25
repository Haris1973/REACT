import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [data, setdata] = useState([])

  const getData =async () => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(response.data);

    const response = await axios.get('https://picsum.photos/v2/list')

    console.log(response.data[0].url);
    
    setdata(response.data)
    
  }

  return (
    <>
        <button onClick={getData}>Get Data</button>

        <div>
          {data.map((elem , key) => {
          return(
            <div key={key}>
                <h3>hello,{elem.author} {key}</h3>
                <img src={elem.download_url} alt={elem.author} />
            </div>
          )
          
        })}
        </div>
    </>
  )
}

export default App
