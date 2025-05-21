import React, { useState, useEffect } from 'react';
import '../css/EditTodo.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const EditTodo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const todo = state?.todo;

  const [title, setTitle] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(()=>{
    if(todo){
        setTitle(todo.title)
        setStatus(todo.status)
    }
  },todo)

  const handleUpdate = async () => {
    try {
      await axios.patch(
        `http://localhost:4567/todo/${todo._id}`,
        { title, status },
        { withCredentials: true }
      );
      alert('Todo updated successfully');
      navigate('/');
    } catch (err) {
      alert('Error updating todo');
      console.error(err);
    }
  };

  if (!todo) return <p>No todo found</p>;

  return (
    <div className="edit-todo-container">
      <h2>Edit Todo</h2>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
        />
      </div>
      <div className="form-group switch-group">
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value === 'true')}>
          <option value="true">Completed</option>
          <option value="false">Pending</option>
        </select>
      </div>
      <button onClick={handleUpdate}>Update Todo</button>
    </div>
  );
};

export default EditTodo;
