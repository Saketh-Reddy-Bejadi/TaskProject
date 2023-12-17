import { useState } from "react";

export const AddTask = () => {
  const [taskValue,setTaskValue] =useState("");
  const [progress,setProgress]=useState(false);

  function handleValue(e) {
    setTaskValue(e.target.value);
  }

  function handleReset() {
    setTaskValue("")
    setProgress(false)
  }
  const handleSubmit=(event) =>{
    event.preventDefault();
    const task={
      id:Math.floor(Math.random()*10000000),
      name:taskValue,
      completed:Boolean(progress)
    }
    console.log(task);
    setTaskValue("")
  }

  return (
    <div className="AddTask" >
        <form className="AddTaskform" onSubmit={handleSubmit} >
            <input type="text" onChange={handleValue} placeholder="Task Name" name="taskName" id="taskName" autoComplete="off" value={taskValue}/>
            <select onChange={(e)=>setProgress(e.target.value)} id="state" value={progress} >
              <option value={false}>Pending</option>
              <option value={true}>Completed</option>
            </select>
            <button onClick={handleReset} id="Resetbtn" type="reset">Reset</button>
            <button type="submit" id="AddTaskbtn">Add Task</button>
            
        </form>
        <p>{taskValue}</p>
    </div>
  )
}
