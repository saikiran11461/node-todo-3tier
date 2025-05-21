import React from 'react';
import "../css/TodoComponent.css";
import { Link } from 'react-router-dom';

const TodoComponent = ({id, title, status, date,  onDelete }) => {
  return (
    <div className='todo-container'>
      <div className='todo-content'>
        <div className='todo-header'>
          <h2 className='todo-title'>{title}</h2>
          <span className={`todo-status ${status === true ? "completed" : "pending"}`}>
            {status === true ? "completed" : "pending"}
          </span>
        </div>

        <div className='todo-info'>
          <p><strong>Assigned to:</strong> { "saikiran"}</p>
          <p><strong>Date:</strong> {date || "N/A"}</p>
        </div>

        <div className='todo-buttons'>
        <Link to="/EditTodo" state={{ todo: { _id:id, title, status, date } }}><button className='btn edit-btn'>Edit</button></Link>
          <button className='btn delete-btn' onClick={()=>onDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
