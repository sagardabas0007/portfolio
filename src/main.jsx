import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/header/Navbar'
import Hero from './Components/hero/Hero'

createRoot(document.getElementById('root')).render(
  <div className='bg-[#f5f5f5]'>
  <StrictMode>
      <Navbar />
      <div className=''>
        <Hero />
        </div>
    </StrictMode>
    </div>
)
