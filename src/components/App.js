import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [allTasks, setAllTasks]=useState(TASKS)
  const [taskArray, setTaskArray]=useState(TASKS)
  const [lastSelected, setLastSelected]=useState()
  

  function handleDelete(deleteTask) {
    const newTaskArray = allTasks.filter((task) => task.text !== deleteTask.text);
    setTaskArray(newTaskArray);
    setAllTasks(newTaskArray);
  }

  function handleFilter(event){
    if(lastSelected){
    lastSelected.className=""}
    event.target.className=(event.target.className !== "selected" ? "selected" : "")
    setLastSelected(event.target)

    if(event.target.textContent==="All"){
      setTaskArray(allTasks)
    }
    else{
      const newTaskList = allTasks.filter(task => task.category === event.target.textContent)
      setTaskArray(newTaskList)
    }
  }

  function onTaskFormSubmit(newItem){
    const objArr = [...allTasks, newItem]
    const newObjArr = [...taskArray, newItem]
    setAllTasks(objArr)
    // setTaskArray(objArr)
    TASKS.push(newItem)
  }

  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        handleFilter={handleFilter}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList 
      handleDelete={handleDelete}
      tasks={taskArray}
      />
    </div>
  );
}

export default App;










