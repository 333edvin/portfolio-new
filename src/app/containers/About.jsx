import { FaCloudDownloadAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
function About() {
  return (
    <section id="about" className="my-24 md:px-5">
      <p className="text-sm flex items-center gap-3"><ImProfile/>About</p>
      <h1 className="text-2xl md:text-5xl font-bold my-3">
        Turning Complex Problems <br /> into Simple Design
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto space-y-10 md:space-y-0 md:space-x-10">
        <div className="space-y-8">
          <p className="text-sm ">
           I&apos;m a full-stack MERN and Nextjs developer, committed to utilizing technology for efficient problem-solving and a commitment to delivering top-notch results
          </p>
          <a href="/images/resume.pdf" download className="border rounded p-3 w-full md:w-auto block text-center flex items-center justify-center gap-3">
            Download Resume <FaCloudDownloadAlt className="text-xl text-cyan-300"/>
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-sm gap-10">
          <div className="space-y-6">
            <div>
              <p className="font-medium text-slate-500">Name</p>
              <h3 className="">Edvin Johnson</h3>
            </div>
            <div>
              <p className="font-medium text-slate-500">Phone Number</p>
              <h3 className="">+91 8129 779 713</h3>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <p className="font-medium text-slate-500">Email</p>
              <h3 className="">
                edvinjohnson333@gmail.com
              </h3>
            </div>
            <div>
              <p className="font-medium text-slate-500">Location</p>
              <h3 className="">Thrissur, Kerala</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
