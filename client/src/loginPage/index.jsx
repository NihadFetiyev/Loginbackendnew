import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context'
import { jwtDecode } from "jwt-decode";

function Login() {
  const { setToken, setDecodedToken } = useContext(AuthContext)
  const [inpUser, setinpUser] = useState()
  const [inpPassword, setinpPassword] = useState()

  const HandleLogin = async (e) => {
    e.preventDefault()
    await fetch("http://localhost:3000/login",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ username: inpUser, password: inpPassword })
      }
    )
      .then(res => res.json())
      .then(data => {
        const decoded = jwtDecode(data)

        setToken(data)
        setDecodedToken(decoded)

        console.log(data)
        console.log(decoded);
      }
      )
      .catch(err => console.log(err))
  }

  return (
    <div><h1>Login</h1>

      <form action="" onSubmit={HandleLogin}>
        <h2>Username</h2>
        <input type="text" value={inpUser} onChange={(e) => setinpUser(e.target.value)} />
        <h2>Password</h2>
        <input type="text" value={inpPassword} onChange={(e) => setinpPassword(e.target.value)} />
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login