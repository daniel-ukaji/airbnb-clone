import React from 'react'
import Image from 'next/image'

function SmallCard({img, location, distance}) {
  return (
    <div className='relative flex flex-col m-1 mt-5 rounded-xl
    cursor-pointer'>
        <div className='relative h-60 w-60'>
            <Image src={img} alt='' layout="fill" className='rounded-lg' />
        </div>


        <div>
            <h2 className='absolute top-5 left-1/3 pr-3 xl:left-3 bg-slate-900/60 text-white px-2'>140k</h2>
        </div>
        <div>
          <h3 className='text-black'>{location}</h3>
          <h3 className='text-gray-500'>{distance}</h3>
        </div>
        
    </div>
  )
}

export default SmallCard