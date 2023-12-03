import "./TaskCard.css";

export const TaskList = ({task,handleDelete,setShow,show}) => {



  return (
    <div className='App' >
            <li key={task.id} className={(task.completed===true)?"completed":"notcompleted"} >
              <span>{task.id} - {task.name}</span>
              <button onClick={()=>handleDelete(task.id)} className='Deletebtn' >Delete</button>
            </li>
    </div>
  )
}
