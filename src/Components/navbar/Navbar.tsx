import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className='bg-[#141313] w-full h-auto rounded-full'>
          <div className='flex justify-between items-center'>
              <div className='flex items-center p-3'>
                  <h1 className='text-2xl text-white font-bold px-3'>SAGAR</h1>
                  <div className='h-5 w-5 bg-orange-500 rounded-[50px]'></div>
              </div>
              <div className='flex justify-between items-center text-[#FFFFFF7A] p-3 font-bold text-base'>
                  <Link href="/" className=' hover:text-white px-8'>home</Link>
                  <Link href="/" className='hover:text-white'>work</Link>
                  <Link href="/" className='hover:text-white  px-8'>contact</Link>
              </div>
      </div>
    </div>
  )
}
