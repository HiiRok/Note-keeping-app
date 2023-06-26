import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );

  const {user ,logout} = UserAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
   
    try {
      await logout();
      navigate('/')

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <header className="flex items-center ...">
     {logo}
        <h1> : {user && user.email}</h1>
        <button onClick={handleClick} className='border px-6 py-3 my-4 text-lg absolute right-0 hover:bg-yellow-200'>Logout</button>
    </header>
  )
}
