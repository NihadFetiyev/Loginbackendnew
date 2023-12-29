import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context'

function Admin() {
  const { token, decodedToken } = useContext(AuthContext)
  const [user, setuser] = useState(null)


  const fetchusers = () => {
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
  }


  useEffect(() => {
    fetchusers()
  }, [token])


  function handleDelete(id) {

    fetch("http://localhost:3000/users/"+ id,
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
        fetchusers()
      }
      )
      .catch(err => console.log(err))
  }

  function handleUpdate(id) {

    fetch("http://localhost:3000/users/"+ id,
      {
        method: "put",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        fetchusers()
      }
      )
      .catch(err => console.log(err))
  }
  return (
    <div>
      <h1>Admin</h1>
      <ol>
        {user && user.map(x =>(
          <li key={x._id}>
            <span>{x.username}-{x.role}-{x.password}</span>
            <button onClick={()=>handleDelete(x._id)}>delete</button>
            <button onClick={()=>handleUpdate(x._id)}>Update</button>
          </li>
)
        )}
      </ol>

    </div>
  )
}

export default Admin