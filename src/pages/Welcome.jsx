import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { OrderContext } from '../context/OrderContext';
import LoginPage from './LoginPage';


function Welcome() {
  const {setLogin,login}= useContext(OrderContext);
    const navigate  = useNavigate();
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img src="/img/Frame 98.png" className="absolute inset-0 w-full h-full object-cover blur-md"/>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <img src="/img/Frame 98.png" alt="" className="w-[320px] sm:w-[350px] rounded-xl shadow-2xl mb-6"/>
        <h1 className="text-3xl font-Headline Large/Font text-white mb-2 text-center">
          Welcome to Chef Kitchen
        </h1>

        <p className="text-gray-300 text-center font-Montserrat  mb-6">
          Check out the awesome food experience! It’s super fresh, quick,
          and oh-so tasty!
        </p>
        <button onClick={()=> setLogin(true)}
        className="bg-orange-400 hover:bg-orange-500 text-white w-50 py-3 px-6 rounded-xl font-semibold shadow-md ">
          Login Now
        </button>

      </div>
      {login && (
        <LoginPage/>
      )}
     
    </div>
  )
}

export default Welcome



