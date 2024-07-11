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
    <div className="">
      <Image src={res2} alt='restaurent-img1' className="w-fill rounded"/>
    </div>
    <div className="">
      <Image src={res1} alt='restaurent-img2' className="w-fill rounded"/>
    </div>
    <div className="">
      <Image src={gym} alt='gym-img' className="w-fill rounded"/>
    </div>
    <div className="">
      <Image src={studio} alt='studio-img' className="w-fill rounded"/>
    </div>
   
  </div>
</div>
    </section>
  )
}

export default Portfolios