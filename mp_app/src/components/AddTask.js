import { useState } from "react";

export const AddTask = () => {
  const [taskValue,setTaskValue] =useState("");

  function handleValue(e) {
    setTaskValue(e.target.value);
  }

  function handleReset() {
    setTaskValue("")
  }

  return (
    <div className="AddTask" >
        <form className="AddTaskform" >
            <input type="text" onChange={handleValue} placeholder="Task Name" name="taskName" id="taskName" autoComplete="off" />
            <button type="submit" id="AddTaskbtn">Add Task</button>
            <button onClick={handleReset} id="Resetbtn" type="reset">Reset  </button>
        </form>
    </div>
  )
}
