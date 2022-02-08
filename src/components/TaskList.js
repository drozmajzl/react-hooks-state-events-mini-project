import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map (task => (<Task task={task} category={task.category} text={task.text} key={task.text} handleDelete={handleDelete} />))}
    </div>
  );
}

export default TaskList;
