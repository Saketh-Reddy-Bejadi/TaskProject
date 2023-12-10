

export const AddTask = () => {
  return (
    <div className="AddTask" >
        <form className="AddTaskform" >
            <label id="addTaskLabel" htmlFor="taskName">Task Name:</label>
            <input type="text" placeholder="Task Name" name="taskName" id="taskName" autoComplete="off" />
            <input id="AddTaskbtn" type="submit" value="Add Task" />
        </form>
    </div>
  )
}
