import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [tasks, setTasks]= useState(TASKS)
const [categories, setCategories] = useState(CATEGORIES)

const handleDelete = (deletedTask) => {
const filteredTasks = tasks.filter((task) => deletedTask.text !== task.text)
setTasks(filteredTasks)
}

const handleCategory = (e) => {
  setCategories(e.target.value)
}

const handleAddNewTask = (newTask)=> {
  setTasks([...tasks, newTask])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter tasks={tasks} categories={categories} handleCategory={handleCategory}/>
      <NewTaskForm categories={categories} handleAddNewTask={handleAddNewTask}/>
      <TaskList tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;