import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmpolyeeDashboard from './components/Dashboard/EmpolyeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { useEffect,useState } from 'react'
import { AuthContext } from './context/AuthProvider'

function App() {

  const AuthData = useContext(AuthContext)
  // console.log(AuthData?.emp)
  const [user, setuser] = useState('')

  useEffect(() => {
    if(AuthData) {
      const LoggedIn = localStorage.getItem('LoggedIn')
      if(LoggedIn) {
        setuser(LoggedIn.role)
      }
    }
  }, [AuthData])

  console.log(user)
  




  const handleLogin = (email , pass) => {
    if(email == 'admin1@example.com' && pass == '123'){
      setuser('admin')
      localStorage.setItem('LoggedIn' , JSON.stringify({role : 'admin'}))
    }
    else if(AuthData && AuthData?.emp.find((e)=> email == e.email && pass == e.password)){
      setuser('employee')   
      localStorage.setItem('LoggedIn' , JSON.stringify({role : 'employee'}))
    }
    else{
      alert('Invalid Credentials!!!!!')
    }
  }

  
 

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : (
        <EmpolyeeDashboard />
      )}
    </>
    )
  }

export default App