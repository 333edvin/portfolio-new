'use client'
import React, { useState } from 'react';
import Image from "next/image"
import resume from '../../../public/images/resume.jpg'
import { SiHey } from "react-icons/si";
import { FaRegEye } from "react-icons/fa6";
import '../globals.css'
function Hero() {
    const [isOpen, setIsOpen] = useState(false);
  return (
      <div className='h-lvh grid grid-cols-1  mx-auto space-y-6 rounded-xl md:px-5'>

<div className="flex flex-col w-full space-y-8  text-gray-500 opacity-20 marquee_text font-bold">
    <marquee className="tracking-widest">
        0101010101010101010101010101010101010101010101010101010101010101010
    </marquee>
    
</div>
        <div className="space-y-6 relative md:bottom-14">
    <p className="text-sm flex gap-2"><SiHey/>Lets Meet!</p>
    <h1 className="text-2xl md:text-5xl font-bold">
    I&apos;m Edvin Johnson <br/>
    Web Designer & Developer
    </h1>
    <div className="flex gap-3 my-3">
        <a href="#projects">
    <button className="border p-2 rounded-lg">My Works</button>
        </a>
        <button
        onClick={() => setIsOpen(true)}
        className="border p-2 rounded-lg flex items-center gap-3"
      >
        Resume <FaRegEye/>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white  rounded-lg shadow-lg relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2  right-4 text-3xl text-gray-700 "
            >
              &times;
            </button>
            {/* Image */}
            <Image
              src={resume}
              alt="resume-Image"
              className="rounded-lg md:w-96 "
              priority
            />
          </div>
        </div>
      )}

        </div>
    </div>
    </div>
)
}

export default Hero