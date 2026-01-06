import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Receipt from './components/Receipt'


function App() {
  // Create a seperate folder named Pages and move page from components to pages 
  // Keep commonly used colors  as variable 
  return (
    <>
      <div className='flex h-full w-full '>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path='/receipt' element={<Receipt/>}/>          
        </Routes>
      </div>
    </>
  )
}

export default App
