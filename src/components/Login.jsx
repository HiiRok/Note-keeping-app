import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Login = () => {
  const navigate=useNavigate();
  const {login} = UserAuth();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email,password); 
      navigate('/custompage') 
    } catch (err) {
      setError(e.message)
      console.log(error) 
    }
  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
    <div>
     <h2 className="text-2xl font-bold">Log in to your account</h2>
     <p className='py-2'>
       Don't have an account?<Link to='/signup' className='underline'>Sign up</Link> for a free account
     </p>
    </div>
    <form onSubmit={handleSubmit}>
    <div className='flex flex-col py-2'>
    <label className='py-2 font-medium'>Email Address</label>
    <input onChange={(e)=>setEmail(e.target.value)} className='border p-3' type='email'></input>
    </div>
    <div className='flex flex-col py-2' >
    <label className='py-2 font-medium'>Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} className='border p-3' type='password'></input>
    </div>
    <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Log in</button>
    </form>
 </div>
  )
}

export default Login