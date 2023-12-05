import {  useState } from "react";
import { TaskCard } from "./TaskCard";
import { CardBox } from "./CardBox";
import styles from  "./TaskList.module.css"

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
        <ul className={tasks.length!==0?`TaskItems ${styles.TaskItems}`:''}>
            <input type='button' onClick={()=>setShow(!(show))} className={tasks.length!==0?'toggle':'disnone'} value={(show===true)?"Hide":"Show"} ></input>
            {show && tasks.map((task)=>(
            <TaskCard key={task.id+1} task={task} handleDelete={handleDelete}  />
            ))}
        </ul>
        <CardBox imp="success" >
            <h1>Success!</h1>
            <p> Eaque ducimus amet temporibus, aspernatur cupiditate quas aut iste autem atque nemo, qui nam placeat officiis eius, corrupti dolores? Ipsum aperiam officia maiores beatae culpa.</p>
        </CardBox>
        <CardBox imp="warning" >
            <h1>Warning!</h1>
            <p>Lillum placeat vitae cumque in corrupti! Delectus, praesentium numquam. Harum sunt earum asperiores nostrum. Natus ipsa sint ea corrupti, explicabo soluta culpa quisquam facilis.</p>
        </CardBox>
        <CardBox imp="alert" >
            <h1>Alert!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia placeat ipsa libero obcaecati, doloremque omnis commodi voluptas incidunt veritatis?</p>
        </CardBox>

    </div>
  )
}
