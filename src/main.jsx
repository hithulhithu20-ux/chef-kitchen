import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { OrderProvider } from './context/OrderContext.jsx'
import { DashBoardProvider } from './context/DashBoardContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <DashBoardProvider>
    <OrderProvider>
      <App />
    </OrderProvider>
  </DashBoardProvider>
  </BrowserRouter>
)
