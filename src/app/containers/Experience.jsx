import luminar from '../../../public/images/luminar.png';
import selflearn from '../../../public/images/selflearn.png';
import fab from '../../../public/images/fab.png';
import Image from 'next/image';
import {  IoToday } from "react-icons/io5";

function Experience() {
  const experiences = [
    {
      company: 'Self Learning',
      role: 'Next.js',
      year: 'Currently',
      logo: selflearn,
      alt: 'self-learning-logo',
    },
    {
      company: 'Luminar Technolab',
      role: 'MERN Stack Developer (Intern)',
      year: '2024',
      logo: luminar,
      alt: 'luminar-logo',
    },
    {
      company: 'Fab Studios',
      role: 'Full Stack Developer',
      year: '2023',
      logo: fab,
      alt: 'fab-logo',
    },
  ];

  return (
    <section id="experience" className="my-24 md:px-5">
      <h1 className="text-sm  mb-8 flex items-center gap-3"><IoToday/>Experience</h1>
      {experiences.map((experience, index) => (
        <div key={index} className="flex flex-row items-center gap-5 w-full mb-6">
          <Image src={experience.logo} alt={experience.alt} className="w-14 md:w-18 " />
          <div className="flex justify-between w-full">
            <div>
              <h3 className="text-sm md:text-lg font-semibold">{experience.company}</h3>
              <p className="text-sm md:text-lg text-gray-600">{experience.role}</p>
            </div>
            <div className="text-gray-500">{experience.year}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
