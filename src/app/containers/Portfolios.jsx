import Image from 'next/image'
import React from 'react'

import { IoDesktop } from "react-icons/io5";
import res2 from '../../../public/images/res2.jpg'
import res1 from '../../../public/images/res1.jpg'
import gym from '../../../public/images/gym.jpg'
import studio from '../../../public/images/studio.jpg'

function Portfolios() {
  return (
    <section id="projects" className='my-24 md:px-5 space-y-6'>
        <p className="text-sm flex items-center gap-3"><IoDesktop/> Portfolio</p>
        <h1 className='text-3xl md:text-5xl font-bold'>Check <br/> out my featured  projects</h1>

        <div className="container mx-auto ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 my-10">
  <div className="relative">
  <Image src={res2} alt='restaurant-img1' className="w-full rounded"/>
  <div className='absolute top-4 right-2 z-20 '>
    <a href="https://restaurant-conveb.vercel.app/" target='_blank' className='border border-white p-1 px-2 text-white bg-black bg-opacity-30 backdrop-blur'>
      Live
    </a>
  </div>
</div>

<div className="relative">
  <Image src={res1} alt='restaurant-img1' className="w-full rounded"/>
  <div className='absolute top-4 right-2 z-20 '>
    <a href="https://edvin-restaurant-app.netlify.app" target='_blank' className='border border-white p-1 px-2 text-white bg-black bg-opacity-30 backdrop-blur'>
      Live
    </a>
  </div>
</div>

<div className="relative">
  <Image src={gym} alt='restaurant-img1' className="w-full rounded"/>
  <div className='absolute top-4 right-2 z-20 '>
    <a href="https://gymbyconveb.netlify.app/" target='_blank' className='border border-white p-1 px-2 text-white bg-black bg-opacity-30 backdrop-blur'>
      Live
    </a>
  </div>
</div>

<div className="relative">
  <Image src={studio} alt='restaurant-img1' className="w-full rounded"/>
  <div className='absolute top-4 right-2 z-20 '>
    <a href="https://studio-photo.vercel.app/" target='_blank' className='border border-white p-1 px-2 text-white bg-black bg-opacity-30 backdrop-blur'>
      Live
    </a>
  </div>
</div>
  </div>
</div>
    </section>
  )
}

export default Portfolios