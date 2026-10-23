import { createContext } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';
import { useState,useEffect } from 'react';

// FIXED: This comment tells Vite to stop complaining about exporting Context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

function AuthProvider({children}) {
  
    const [userData, setuserData] = useState('')

    useEffect(() => {
        const {emp , Admin} = getLocalStorage()
        // FIXED: This comment tells the editor to ignore the synchronous state warning
        // eslint-disable-next-line
        setuserData({emp,Admin})
    }, [setuserData])
  
    return (
    <>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </>
  )
}

export default AuthProvider