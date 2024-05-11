import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete}) {

const mappedTask= tasks.map(task => (
  <Task task={task} key={task.text} handleDelete={handleDelete} />
))

  return (
    <div className="tasks">
  {mappedTask}
    </div>
  );
}

export default TaskList;
