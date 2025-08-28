import React from 'react'
import { FaInstagram, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='bg-white h-auto w-auto mx-5 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg flex flex-col justify-center items-center gap-y-7 pt-28'>
      <div className='flex items-center justify-between gap-2'>
        <div className='bg-teal-400 h-2 w-2 rounded-full animate-pulse'></div>
        <div className='font-light text-sm'>Available for new projects</div>
      </div>

      <div className='text-center text-7xl font-[550]'>
        I'm a developer crafting<br/> thoughtful digital solutions
      </div>

      <div className='text-center font-light text-sm'>
        I blend strategic thinking with intuitive design to create user<br/>-centered digital journeys that deliver results.
      </div>

      {/* hire button and socials */}

      <div className='flex justify-between items-center gap-3'>
        <a href="#"><button className='bg-[#FAD6A5] px-4 py-2 rounded-lg text-base font-medium shadow-[0_0_10px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.4)] transition-all duration-700'>let's connect</button></a>
        <a href="https://www.instagram.com/dabas.sagar_0007/"><FaInstagram className='h-5 w-5'/></a>
        <a href="https://x.com/sagar_dbs?s=21"><FaXTwitter className='h-5 w-5'/></a>
        <a href="https://github.com/sagardabas0007"><FaGithub className='h-5 w-5'/></a>
      </div>

      <div>
        <hr class=" border-gray-300 w-[600px] mt-7" />
      </div>

      <div className=''>
        <div className='text-center font-light text-sm'>
          "Sagar transformed our digital presence with his<br/> thoughtful, results-driven approach to design."
        </div>
        <div className='flex items-baseline justify-end gap-2 text-green-700 animate-bounce'>
          <span>-</span><a href="https://www.ref3r.com/" className='pt-4 text-md font-medium'>ref3r.com</a>
        </div>
      </div>

    </div>
  )
}

export default Hero
