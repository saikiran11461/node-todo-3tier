import React, { useState } from 'react'
import "../css/Register.css"
import axios from 'axios'
const Register = () => {
    const init = {
        name:"",
        email:"",
        password:""
    }

    const [form,setForm] = useState(init);


    const handleChange =(e)=>{
        const {name,value} = e.target;

        const payload ={
            ...form,
            [name]:value
        }
        setForm(payload)
    }


    const handleSubmit = (e)=>{
         e.preventDefault();
        axios.post("http://localhost:4567/users/register",form)
        .then(res=>{
            console.log("res",res)
        })
        .catch(err=>{
            console.log(err)
        })
    }






  return (
    <div className='formBox'>
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} value={form.name} type='text' placeholder='name'/><br />
            <input name="email" onChange={handleChange} value={form.email} type='email' placeholder='email'/><br />
            <input name='password' onChange={handleChange} value={form.password} type='password' placeholder='password'/><br />
            <input type="submit" />
        </form>
       
    </div>






  )
}

export default Register
