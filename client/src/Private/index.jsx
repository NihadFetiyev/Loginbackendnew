import React, { useContext } from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import { AuthContext } from '../Context'

function Private({role}) {
  const {decodedToken} = useContext(AuthContext)
  return (
    decodedToken && role.includes(decodedToken.role) ?  <Outlet/> : <Navigate to={"/login"}></Navigate>
  )
}

export default Private