import {  useState } from "react";
import { TaskCard } from "./TaskCard";
import "./TaskList.css"
import { AddTask } from "./AddTask";

export const TaskList = () => {

    const [tasks,setTasks]=useState([
        
      ])
    
    
      function handleDelete(id) {
          setTasks(tasks.filter((task)=> id!==task.id))
      }
      const [show,setShow]=useState(true);


  return (
    <div className="content" >
        <AddTask tasks={tasks} setTasks={setTasks}/>
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
