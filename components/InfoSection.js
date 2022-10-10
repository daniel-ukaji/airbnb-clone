import React from 'react'
import Image from 'next/image'

function InfoSection() {
  return (
    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-8'>
            <h2 className='text-3xl font-medium pb-5'>Villa MAIREA, con piscina privada</h2>
            <div className='flex justify-between'>
                <div className='flex space-x-1'>
                    <p>5.0</p>
                    <p>·</p>
                    <p>10 reviews</p>
                </div>
                <div className='flex space-x-10'>
                    <p>Share</p>
                    <p>Save</p>
                </div>
            </div>
        </section>
        <section className='relative grid grid-cols-5'>
            <div className='col-span-1'>
                <img src='https://a0.muscache.com/im/pictures/prohost-api/Hosting-54253277/original/a13e30cb-ac6d-43b5-83e0-6be658345b7b.jpeg?im_w=960'  />
            </div>
            <img src='https://a0.muscache.com/im/pictures/prohost-api/Hosting-54253277/original/a283df08-61cf-4089-bc11-e3349b50a410.jpeg?im_w=720'  />
            <img src='https://a0.muscache.com/im/pictures/prohost-api/Hosting-54253277/original/974a0077-ea31-4408-a882-a2cc6fdaf4e1.jpeg?im_w=720'  />
            <img src='https://a0.muscache.com/im/pictures/prohost-api/Hosting-54253277/original/47b4c9f6-245e-4601-94ec-673176b4e164.jpeg?im_w=720'  />
            <img src='https://a0.muscache.com/im/pictures/prohost-api/Hosting-54253277/original/64864a3a-5a05-4558-811b-1bb19699999d.jpeg?im_w=720'  />
        </section>

        <section className='pt-10 flex space-x-20 pb-6'>
        
            <div>
                <h2 className='text-2xl font-medium pb-1'>Entire villa hosted by Raquel</h2>
                    <div className='flex space-x-1'>
                        <p>8 guests</p>
                        <p>·</p>
                        <p>4 bedrooms</p>
                        <p>·</p>
                        <p>6 beds</p>
                        <p>·</p>
                        <p>4 baths</p>
                    </div>
            </div>
            <div className='relative pl-40'>
                <img src='https://a0.muscache.com/im/pictures/user/7be086f9-e79c-46ab-8f6d-46355cd930a3.jpg?im_w=240' className='rounded-full h-16 w-16 object-cover'  />
            </div>
            
            <div className='pl-20'>
                
                <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>

            </div>

        </section>
    </main>
  )
}

export default InfoSection