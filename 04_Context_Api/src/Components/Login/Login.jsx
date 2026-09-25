import React ,{useState} from 'react'
import userContext from '../../Context/userContext'
import { useContext } from 'react'

function Login() {
    const [username, setusername] = useState('')
    const [pass, setpass] = useState('')

    const {setUser} = useContext(userContext);

    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({username , pass})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setusername(e.target.value)}
        />
        <input 
            type="text"
            placeholder='password' 
            value={pass}
            onChange={(e) => setpass(e.target.value)}
        />
        <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login