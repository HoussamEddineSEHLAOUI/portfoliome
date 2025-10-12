import React from 'react';
import { FaJava, FaReact, FaDocker, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGit, FaLinux } from 'react-icons/fa';
import { SiSpring, SiSpringboot, SiExpress, SiFlask, SiFirebase, SiJavascript, SiTypescript, SiNextdotjs, SiRedux, SiMongodb, SiPostgresql,  SiApachekafka, SiKeycloak, SiGrafana, SiMicrodotblog } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { DiScrum } from 'react-icons/di';

const skills = [
  { name: 'Java', icon: <FaJava color="#f89820" />, color: 'bg-[#f8e5c2]' },
  { name: 'Spring', icon: <SiSpring color="#6db33f" />, color: 'bg-[#e6f4e6]' },
  { name: 'SpringBoot', icon: <SiSpringboot color="#6db33f" />, color: 'bg-[#e6f4e6]' },
  { name: 'Node', icon: <FaNodeJs color="#8cc84b" />, color: 'bg-[#eafbe7]' },
  { name: 'Express', icon: <SiExpress color="#000" />, color: 'bg-[#f5f5f5]' },
  { name: 'Python', icon: <FaPython color="#3776ab" />, color: 'bg-[#e3f2fd]' },
  { name: 'Flask', icon: <SiFlask color="#000" />, color: 'bg-[#f5f5f5]' },
  { name: 'FireBase', icon: <SiFirebase color="#ffca28" />, color: 'bg-[#fff8e1]' },
  { name: 'HTML', icon: <FaHtml5 color="#e44d26" />, color: 'bg-[#ffe0b2]' },
  { name: 'CSS', icon: <FaCss3Alt color="#1572b6" />, color: 'bg-[#e3f2fd]' },
  { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" />, color: 'bg-[#fffde7]' },
  { name: 'TypeScript', icon: <SiTypescript color="#3178c6" />, color: 'bg-[#e3f2fd]' },
  { name: 'React', icon: <FaReact color="#61dafb" />, color: 'bg-[#e0f7fa]' },
  { name: 'Next', icon: <SiNextdotjs color="#000" />, color: 'bg-[#f5f5f5]' },
  { name: 'Redux', icon: <SiRedux color="#764abc" />, color: 'bg-[#ede7f6]' },
  { name: 'Docker', icon: <FaDocker color="#2496ed" />, color: 'bg-[#e3f2fd]' },
  { name: 'OOP', icon: <SiMicrodotblog color="#ff9800" />, color: 'bg-[#fff3e0]' },
  { name: 'SQL', icon: <SiPostgresql color="#336791" />, color: 'bg-[#e3f2fd]' },
  { name: 'MongoDb', icon: <SiMongodb color="#47a248" />, color: 'bg-[#e8f5e9]' },
  { name: 'REST APIs', icon: <TbApi color="#00bcd4" />, color: 'bg-[#e0f7fa]' },
  { name: 'Git', icon: <FaGit color="#f34f29" />, color: 'bg-[#ffe0e0]' },
  { name: 'Unix', icon: <FaLinux color="#000" />, color: 'bg-[#f5f5f5]' },
  { name: 'Kafka', icon: <SiApachekafka color="#231f20" />, color: 'bg-[#f3e5f5]' },
  { name: 'Keycloak', icon: <SiKeycloak color="#0062ff" />, color: 'bg-[#e3f2fd]' },
  { name: 'Grafana Stack', icon: <SiGrafana color="#f46800" />, color: 'bg-[#fff3e0]' },
  { name: 'Microservices', icon: <SiMicrodotblog color="#00bcd4" />, color: 'bg-[#e0f7fa]' },
  { name: 'Agile', icon: <DiScrum color="#43a047" />, color: 'bg-[#e8f5e9]' },
];

const splitSkills = [
  skills.slice(0, 9),
  skills.slice(9, 18),
  skills.slice(18)
];

const animationStyles = [
  'animate-marquee',
  'animate-marquee-reverse',
  'animate-marquee'
];

const MainSkills = () => {
  return (
    <section className="container mr-auto ml-auto py-16 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</h2>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 18s linear infinite;
        }
      `}</style>
      <div className="flex flex-col gap-8">
        {splitSkills.map((row, i) => (
          <div key={i} className="w-full overflow-x-hidden">
            <div className={`flex gap-6 min-w-max ${animationStyles[i]}`} style={{width: 'max-content'}}>
              {[...row, ...row].map((skill, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center rounded-full shadow-md px-6 py-5 min-w-[110px] min-h-[110px] ${skill.color} transition-transform duration-300 hover:scale-105`}
                >
                  <span className="text-4xl mb-2">{skill.icon}</span>
                  <span className="font-semibold text-lg text-gray-800 dark:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSkills;
