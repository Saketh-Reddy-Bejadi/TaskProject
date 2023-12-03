
export const TaskCard = ({task,handleDelete,setShow,show}) => {



  return (
    <div >
            <li key={task.id} className={(task.completed===true)?"completed":"notcompleted"} >
              <span>{task.id} - {task.name}</span>
              <button onClick={()=>handleDelete(task.id)} className='Deletebtn' >Delete</button>
            </li>
    </div>
  )
}
