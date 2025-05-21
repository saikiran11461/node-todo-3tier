import React, { useState } from 'react';
import "../css/AddTodo.css"

const AddTodo = ({addTodoFun}) => {

  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title.trim()) return
    addTodoFun(title)
  };


  return (
    <div className="add-todo-container">
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          placeholder="Enter your todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
