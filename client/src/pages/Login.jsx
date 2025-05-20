import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
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
            axios.post("http://localhost:4567/users/login",form,{
                 withCredentials: true
            })
            .then(res=>{
                if(res?.status === 200){
                    navigate("/")
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    
    
  return (
   <div className='formBox'>
        <form onSubmit={handleSubmit}>
            <input name="email" onChange={handleChange} value={form.email} type='email' placeholder='email'/><br />
            <input name='password' onChange={handleChange} value={form.password} type='password' placeholder='password'/><br />
            <input type="submit" />
        </form>
       
    </div>
  )
}

export default Login