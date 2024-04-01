import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function UpdateUser() {

const {id} = useParams();
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [profession, setProfession] = useState("")
const navigate = useNavigate();

useEffect(() => {
  axios.get("http://localhost:3001/update/" + id).then(
    (res) => {setName(res.data.name)
        setAge(res.data.age)
        setProfession(res.data.profession)}
  ).catch(
    (e) => {console.log(e)}
  )
  
}, [])

const handleUpdate = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/update-user/" + id,{
        name,age,profession
      }).then(
       (result) => {console.log(result)
       navigate("/")}
      ).catch(
        e => console.log(e)
      )
  
}

  return (
    <div>
      <form>
        <label>
            Name
        </label>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Age</label>
        <input value={age} onChange={(e) => setAge(e.target.value)}/>
        <label>Profession</label>
        <input value={profession} onChange={(e) => setProfession(e.target.value)}/>
      <button onClick={handleUpdate}>Submit</button>
      </form>
    </div>
  )
}

export default UpdateUser
