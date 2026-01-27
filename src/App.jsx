import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Receipt from './components/Receipt'
import Layout from './DashBoard/Layout'
import Category from './DashBoard/Category'
import Products from './DashBoard/Products'

import Orders from './DashBoard/Orders'


function App() {
  // Create a seperate folder named Pages and move page from components to pages 
  // Keep commonly used colors  as variable 
  return (
    <>
      <div className='flex h-full w-full '>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path='/receipt' element={<Receipt />} />
          <Route path='/admin' element={<Layout />}>
            <Route index element={<Category />} />
            <Route path='products' element={<Products/>}/>
            <Route path='orders' element={<Orders/>}/>

          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
