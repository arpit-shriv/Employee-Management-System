import React from 'react'
import { useState } from 'react'

const login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e)=>{
            submitHandler(e);
        }} 
        className='flex flex-col items-center justify-center'>
            <input 
            value={email} 
            onChange={(e) =>{
                setEmail(e.target.value);
            }} 
            required 
            className='outline-none bg-transparent border-2 border-emerald-600 py-2 px-4 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'/>
            <input
            value={password} 
            onChange={(e) =>{
                setPassword(e.target.value);
            }} 
            required 
            className='outline-none bg-transparent border-2 border-emerald-600 py-2 px-4 text-xl mt-3 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password'/>
            <button className='w-full mt-8 text-white outline-none bg-emerald-600 py-2 px-3 text-xl rounded-full placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default login
