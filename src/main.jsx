import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExcelProvider from './context/ExcelContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ExcelProvider>
      <App />
    </ExcelProvider>
    
  </StrictMode>,
)
