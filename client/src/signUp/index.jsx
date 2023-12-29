import React, { useState } from 'react'

function SignUp() {
  const [inpUser, setinpUser] = useState()
  const [InpPassword, setInpPassword] = useState()

  function HandleSignUp(e) {
    e.preventDefault()
    fetch("http://localhost:3000/register",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: inpUser, password: InpPassword }),
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      }
      )
      .catch(err=>console.log(err))
  }

  
  return (
    <div>
      <h1>SignUp</h1>
      <form action="" onSubmit={HandleSignUp}>
        <h2>Username</h2>
        <input type="text" value={inpUser} onChange={(e) => setinpUser(e.target.value)} />
        <h2>Password</h2>
        <input type="text" value={InpPassword} onChange={(e) => setInpPassword(e.target.value)} />
        <br />
        <button>SignUp</button>
      </form>
    </div>
  )
}

export default SignUp