import Image from 'next/image'
import React from 'react'

function HostBanner() {
  return (
  <section>
    <div className='relative '>
        <div className='flex items-center justify-center h-[300px] border flex-col space-y-6'>
            <h1 className='font-Sora text-5xl text-[#162748]'>Open your door<span className='block text-center'> to hosting.</span> </h1>
            <button className='py-3 px-10 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#DB5461] rounded-lg border border-gray-200'>Start Hosting</button>
        </div>
    </div>
    <div className='relative h-96 flex mb-36'>
      <Image src='https://i.ibb.co/qBXTY59/Rectangle-17721.png' layout='fill' objectFit='cover' />
    </div>
    </section>
  )
}

export default HostBanner