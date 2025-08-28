import React from 'react'
import My from '../../assets/my.jpg'; 

const Navbar = () => {
    const btns = ["about", "me", "get started"];

  return (
      <div className='flex items-center justify-between px-5 py-2'>
          <div className='flex items-center justify-between gap-2'>
              <img src={My} alt="broken image" className='h-8 w-7 rounded-full' />
              <p className='text-sm font-medium'>Sagar Dabas</p>
          </div>
      <div className='flex items-center justify-between gap-2'>
        <a href="#" className='font-extralight text-sm hover:text-gray-500 transition-all duration-100'>Hi@dabas.dev</a>
       {btns.map((label, index) => (
         < button 
            key={index} 
            className='bg-white text-sm font-normal px-4 py-[2px] rounded-md text-[#1c1b1b] hover:bg-gray-100 transition-all duration-150 shadow-[0_0_10px_rgba(0,0,0,0.9) cursor-pointer'
          >
            {label}
          </button>
        ))}
          </div>
      
    </div>
  )
}

export default Navbar
