import React, { createContext } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';
import { useState,useEffect } from 'react';

export const AuthContext = createContext();

function AuthProvider({children}) {
  
    const [userData, setuserData] = useState('')

    useEffect(() => {
        const {emp , Admin} = getLocalStorage()
        setuserData({emp,Admin})
    }, [])
  
    return (
    <>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </>
  )
}

export default AuthProvider