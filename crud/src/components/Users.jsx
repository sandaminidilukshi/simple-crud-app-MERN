import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])

useEffect(() => {
 axios.get("http://localhost:3001/").then(
    (res) => {
        setUsers(res.data)
        console.log("users",res)
    }
 ).catch(
    e => console.log(e)
 ) 
}, [])

const deleteRecord = (id) => {
    axios.delete("http://localhost:3001/delete/" + id).then(
     window.location.reload()
    ).catch(
        (error) => console.log()
    )
}

  return (

    <div >
        <div >
        <Link to={"/create-user"}><button >Add</button></Link>
        <table>
           
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
            <th>Action</th>
            </tr>
            
            
            {users.map((user) => (
                <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.profession}</td>
                <td><Link to={`/update/${user._id}`}><button >Update</button></Link>
                <button onClick={(e)=> deleteRecord(user._id)}>Delete</button></td>
            </tr>
            ))
                
                }
            
        </table>
        </div>
    </div>
  )
}

export default Users
