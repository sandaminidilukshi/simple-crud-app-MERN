import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function CreateUser() {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [profession, setProfession] = useState("")
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/create-user",{
      name:name,
      age:age,
      profession:profession
    }).then(
     (result) => {console.log(result)
     navigate("/")}
    ).catch(
      e => console.log(error)
    )



    console.log(name,age,profession)
    setName("")
   setAge("")
   setProfession("")
}

  return (
    <div>
      <form>
        <label>
            Name
        </label>
        <input value={name} onChange={(e) => setName(e.target.value)} name='name' id='name'/>
        <label>Age</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} name='age' id='age'/>
        <label>Profession</label>
        <input value={profession} onChange={(e) => setProfession(e.target.value)} name='profession' id='profession'/>
      <button onClick={handleSubmit}>Submit</button>
      </form>
      
    </div>
  )
}

export default CreateUser
