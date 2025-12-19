import { useState } from 'react'

import './App.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Order from './components/Order'
import Welcome from './components/Welcome'





function App() {


  return (
    <>
      <div className='flex h-full w-full bg-gray-900 '>

        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path="/home" element={<Home />} />
        </Routes>


      </div>

    </>
  )
}

export default App
