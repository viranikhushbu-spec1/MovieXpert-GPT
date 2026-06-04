import React, { useState } from 'react';
import Header from './Header';
import { BG_URL } from '../utils/constant';

const Login = () => {
 const [issigninForm, setissigninForm]=useState(true);

 const togglesigninform = () =>
 {
   setissigninForm(!issigninForm);
 };

  return (
    <div>
      
      <Header/>
      <div className='absolute'>
      <img src={BG_URL} alt='bgpath'/>
      </div>
      <div className="relative flex justify-center text-white items-center h-screen">
    <form className="bg-black/80 p-8 w-3/12 rounded-md">
      <h1 className='text-4xl text-white-500 mb-5'>{issigninForm ? "Sign In" : "Sign Up"}</h1>
         
        {!issigninForm && <input type="text" placeholder='Enter Name' className='w-full p-2 mb-6 bg-gray-500'/>}
        <input type="email" placeholder='Enter Email' className='w-full p-2 mb-6 bg-gray-500'/>
        <input type="password" placeholder='Enter Password' className='w-full p-2 mb-6 bg-gray-500'/>
        <button className='p-2 bg-red-600 w-full mb-3'>{issigninForm ? "Sign In" : "Sign Up"}</button>
     
      <p onClick={togglesigninform}>
      {issigninForm ? "Want To Create Account? Signup Now" : "Already have Account? Signin"}
      </p>
       </form>

    </div>
    </div>
  )
}

export default Login;
