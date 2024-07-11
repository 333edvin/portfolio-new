'use client'
import Link from 'next/link';
import { useState } from 'react';
import { TiHome } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { IoDesktop, IoToday } from "react-icons/io5";
import { FaGraduationCap, FaBars } from "react-icons/fa";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="fixed right-0 top-0 w-auto bg-cyan-500/30 backdrop-blur-sm p-2 z-50 rounded-full m-5">
      <div className="container mx-auto flex justify-between items-center relative">
        <button
          onClick={toggleDropdown}
          className="text-lg bg-cyan-500/30 p-2 rounded-full"
        >
          <FaBars />
        </button>
        {dropdownOpen && (
          <div className="absolute top-full right-0 mt-5 bg-cyan-500/30  rounded-full  transition-transform duration-300 ease-out transform text-center">
            <div className="flex flex-col   space-y-6 p-4">
              <Link href="/" >
                <p className="text-lg "><TiHome /></p>
              </Link>
              <Link href="#about">
                <p className="text-lg"><ImProfile /> </p>
              </Link>
              <Link href="#projects">
                <p className="text-lg"><IoDesktop /> </p>
              </Link>
              <Link href="#experience">
                <p className="text-lg"><IoToday /> </p>
              </Link>
              <Link href="#education">
                <p className="text-lg"><FaGraduationCap /> </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
