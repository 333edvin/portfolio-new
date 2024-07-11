import Image from "next/image"
import profilepic from '../../../public/images/profile-pic.png'
// import logo from '../../../public/images/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
function Sidebar() {
  return (
    <div className='container flex flex-col justify-center items-center mx-auto p-3 '>
        <div className="my-5">
            <Image src={profilepic} alt="profile-pic" className="rounded-full w-64 "/>
        </div>
        <div
        className="p-3">
            {/* <Image src={logo} alt="logo"/> */}
            <h1 className="text-lg ">Edvin johnson</h1>
        </div>

        <div className="flex flex-col justify-center items-center text-center space-y-9">

                
                <p className="text-xl mt-3">Full Stack Developer </p>

            <div className="flex items-center gap-2">
                <HiLocationMarker/>Thrissur,kerala
            </div>

            <div className="flex justify-center gap-3 text-xl"> 
                <a href="https://www.linkedin.com/in/edvin-johnson-884a10221/" target="_blank" className="border p-2 rounded-full border-2 border-cyan-800" aria-label="linkedin"><FaLinkedin/></a>
                <a href="https://github.com/333edvin" target="_blank" className="border p-2 rounded-full border-2 border-cyan-800" aria-label="github"><FaGithub/></a>
                <a href="https://www.instagram.com/00_solitary_soul__?igsh=MnIyanMzdjc2YXB4" target="_blank" className="border p-2 rounded-full border-2 border-cyan-800" aria-label="instagram"><AiFillInstagram/></a>
                <a href="https://wa.me/8129779713" target="_blank" className="border p-2 rounded-full border-2 border-cyan-800" aria-label="whatsapp"><IoLogoWhatsapp/></a>
            </div>

                <a href="https://wa.me/8129779713" target="_blank">
            <button className="bg-cyan-600 w-full rounded-lg p-2">
                Lets Work Together
                </button>
                </a>
        </div>
    </div>
  )
}

export default Sidebar