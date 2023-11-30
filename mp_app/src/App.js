import React from 'react';
import { useState } from 'react';
import "./App.css"

export const App = () => {
  const [tasks,setTasks]=useState([
    {id:5271,name:"Create a personal portfolio website",completed:true},
    {id:3825,name:"Build a blogging platform",completed:false},
    {id:6042,name:"Build or clone a E-Commerence Website",completed:false},
  ])

  function handleDelete(id) {
    setTasks(tasks.filter((task)=> id!==task.id))
  }

  return (
    <div className='App'>
      <h1 className='Heading' >Tasks List</h1>
      <ul className='TaskItems' >
        {tasks.map((task)=>(
          <li key={task.id} >
            <span>{task.id} - {task.name}</span>
            <button onClick={()=>handleDelete(task.id)} className='Deletebtn' >Delete</button>
          </li>
          
        ))}
      </ul>
    </div>
  )
}
