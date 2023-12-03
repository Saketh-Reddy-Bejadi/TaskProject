import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskCard';
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
  const [show,setShow]=useState(true);

  return (
    <div >
      <Header/>
      <ul className={tasks.length!==0?'TaskItems':''}>
        <input type='button' onClick={()=>setShow(!(show))} className={tasks.length!==0?'toggle':'disnone'} value={(show===true)?"Hide":"Show"} ></input>
        {show && tasks.map((task)=>(
        <TaskList key={task.id} task={task} handleDelete={handleDelete}  />
        ))}
      </ul>
    </div>
  )
  
}
