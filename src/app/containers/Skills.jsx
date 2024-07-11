import Image from 'next/image';
import nextjs from '../../../public/images/nextjs.png';
import reactjs from '../../../public/images/reactjs.png';
import expressjs from '../../../public/images/expressjs.png';
import nodejs from '../../../public/images/nodejs.png';
import mongodb from '../../../public/images/mongodb.png';
import tailwind from '../../../public/images/tailwind.png';

function Skills() {
  const skills = [
    { src: nextjs, alt: 'Next.js', name: 'Next.js' },
    { src: reactjs, alt: 'React.js', name: 'React.js' },
    { src: expressjs, alt: 'Express.js', name: 'Express.js' },
    { src: nodejs, alt: 'Node.js', name: 'Node.js' },
    { src: mongodb, alt: 'MongoDB', name: 'MongoDB' },
    { src: tailwind, alt: 'Tailwind CSS', name: 'Tailwind CSS' },
  ];

  return (
    <div className="container grid grid-cols-3  md:px-5 md:grid-cols-6 mx-auto p-3 rounded-lg bg-cyan-600 text-center text-sm mb-10">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center m-2">
          <Image src={skill.src} alt={skill.alt} className="w-10 md:w-12 " />
          <p className="mt-2 text-xs md:text-sm">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
