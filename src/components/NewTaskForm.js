import { React, useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [selected, setSelected]=useState('Code')
  const [input, setInput]=useState('')

  const newItem={
    text: input,
    category: selected, 
  }

  const cat = categories.filter(category => category !== "All")

  function handleChange(e){
    setSelected(e.target.value)
  }

  function handleInput(e){
    e.preventDefault()
    setInput(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit(newItem)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInput} value={input}/>
      </label>
      <label>
        Category
        <select name="category" value={selected} onChange={handleChange}>
          {cat.map(category =>
          <option key={category}>{category}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
