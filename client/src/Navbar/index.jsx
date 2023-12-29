import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../Context'
function Navbar() {
  const { decodedToken,removeToken } = useContext(AuthContext)
  return (
    <div className="container">
      <NavLink to={"/"} >Home</NavLink>
      {decodedToken ? 
      <>
      <NavLink to={"/profil"} >Profil: {decodedToken.username}</NavLink>
      <button onClick={removeToken}>Logout</button>
      </> :
        <>
          <NavLink to={"/login"} >Login</NavLink>
          <NavLink to={"/signup"} >Sign Up</NavLink>
        </>
      }
      { decodedToken && decodedToken.role === "Admin" ? <NavLink to={"/admin"} >Admin</NavLink> :  null}
    </div>
  )
}

export default Navbar