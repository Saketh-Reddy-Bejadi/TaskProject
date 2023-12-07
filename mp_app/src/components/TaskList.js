import {  useState } from "react";
import { TaskCard } from "./TaskCard";
import "./TaskList.css"

export const TaskList = () => {

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
    <div className="content" >
        <ul className={tasks.length!==0?`TaskItems`:''}>
            <div className={tasks.length!==0?'topSec':'disnone'} >
            <p>Task Items</p>
            <input type='button' onClick={()=>setShow(!(show))} className={tasks.length!==0?'toggle':'disnone'} value={(show===true)?"Hide Tasks":"Show Tasks"} ></input>
            </div>
            {show && tasks.map((task)=>(
            <TaskCard key={task.id+1} task={task} handleDelete={handleDelete}  />
            ))}
        </ul>

    </div>
  )
}
