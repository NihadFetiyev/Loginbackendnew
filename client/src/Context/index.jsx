import React, { createContext, useState } from 'react'
import UseLocalStorage from '../hook'
import { jwtDecode } from 'jwt-decode'

export const AuthContext = createContext()

function AuthProvider({children}) {
    const [token, setToken] = UseLocalStorage("user",null)
    const [decodedToken, setDecodedToken] = useState(token ? jwtDecode(token)  :null)

    function removeToken() {
      setToken(null)
      setDecodedToken(null)
      localStorage.removeItem("user")
    }
  return (
    <AuthContext.Provider value={{token, setToken,decodedToken, setDecodedToken,removeToken}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider