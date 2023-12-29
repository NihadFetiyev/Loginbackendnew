import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context'

function Admin() {
  const { token, decodedToken } = useContext(AuthContext)
  const [user, setuser] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/users",
      {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setuser(data)
      }
      )
      .catch(err => console.log(err))
  }, [token])


  function handleDelete(id) {

    fetch("http://localhost:3000/users" + id,
      {
        method: "delete",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      }
      )
      .catch(err => console.log(err))
  }
  return (
    <div>
      <h1>Admin</h1>
      <ol>

        {user && user.map(x =>
          <li key={x._id}>

            <span>{x.username}-{x.role}-{x.password}</span>
            <button onClick={()=>handleDelete(x._id)}>delete</button>
          </li>

        )}
      </ol>

    </div>
  )
}

export default Admin