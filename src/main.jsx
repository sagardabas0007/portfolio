import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/header/Navbar'
import Hero from './Components/hero/Hero'
import Projects from './Components/my-projects/Projects'

createRoot(document.getElementById('root')).render(
  <div className='bg-[#f5f5f5] h-auto w-full'>
  <StrictMode>
      <Navbar />
      <div className='bg-white h-auto w-auto mx-5 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg'>
        <Hero />
        <Projects/>
        </div>
    </StrictMode>
    </div>
)
