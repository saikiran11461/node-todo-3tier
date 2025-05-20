import React from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='navbar'>
       <div className="heading">TodoApp</div>
       <div className="right">
          <button>AddTodo</button>
         <Link to={"/login"}> <button>Login</button></Link>
          <Link to={"/register"}> <button>Register</button></Link>
       </div>
    </div>
  )
}

export default NavBar