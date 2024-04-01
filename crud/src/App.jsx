import React from 'react'
import './App.css'
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Users from './components/Users.jsx'
import "bootstrap/dist/css/bootstrap.css"
import CreateUser from './components/CreateUser.jsx'
import UpdateUser from './components/UpdateUser.jsx'

function App() {



  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Users/>}></Route>
    <Route path="/create-user" element={<CreateUser/>}></Route>
    <Route path='/update/:id' element={<UpdateUser />}></Route>
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
