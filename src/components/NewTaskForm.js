import React, {useState} from "react";

function NewTaskForm({categories, handleAddNewTask}) {
  const [newDetails, setNewDetails] = useState('')
  const [newCategory, setNewCategory] = useState('')

const handleNewDetails = (e) => {
  setNewDetails(e.target.value)
}

const handleNewCategory = (e) => {
  setNewCategory(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  let newTask = {text: newDetails, category: newCategory}
  handleAddNewTask(newTask)
}

const mappedCategory = categories.slice(1,5).map ((category) => 
  <option key={category} value={category}>{category}</option>
)

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input value={newDetails} type="text" name="text" onChange={handleNewDetails}/>
      </label>
      <label>
        Category
        <select value={newCategory} name="category" onChange={handleNewCategory}>
          {mappedCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
