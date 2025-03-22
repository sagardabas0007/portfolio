import React from 'react'
import Image from "next/image";
import { Earth } from "lucide-react"

const Location = () => {
  return (
    <div className='bg-[#141313] h-auto w-[450px] absolute top-[230px] rounded-[20px]'>
          <div className='flex justify-start items-center py-3 px-5'>
              <div>
                  <Earth width={40} height={40} className='text-orange-500'/>
              </div>
              <div>
                  <h1 className='text-white font-bold text-xl px-4'>Based in New Delhi, India</h1>
              </div>
      </div>
    </div>
  )
}

export default Location
