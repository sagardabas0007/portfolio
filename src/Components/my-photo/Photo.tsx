import React from 'react'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className=' absolute top-[100px] left-[490px] h-[320px] w-auto rounded-[20px]'>
          <Image src="/me3.jpg" height={400} width={300} alt='/' className='rounded-[20px] h-[320px] w-[300px]'/>
    </div>
  )
}

export default Photo
