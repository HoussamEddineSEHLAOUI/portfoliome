'use client'
import React, { useState, useEffect } from 'react'

const aboutText = `Hi, I’m Houssam-Eddine Sehlaoui, a passionate and dedicated Software Engineer. With a strong foundation in computer science and a focus on modern technologies, I’ve had the opportunity to work with leading companies and contribute to diverse projects.\n\nI hold an engineering degree in Computer Science from the Mohammadia School of Engineers, Rabat, where I specialized in areas like Data Structures, Algorithms, DBMS, and Operating Systems. Over the years, I’ve gained hands-on experience with various technologies, including Java, Spring Boot, Python, React, TypeScript, and Docker.\n\nI thrive in collaborative, agile environments and enjoy taking on challenges that involve designing scalable systems, optimizing performance, and creating seamless user experiences.\n\nWhen I’m not coding, I love exploring new technologies and staying up-to-date with industry trends. Feel free to connect with me on LinkedIn.`;

const AboutMe = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const words = aboutText.split(' ');

  useEffect(() => {
    if (wordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + (prev ? ' ' : '') + words[wordIndex]);
        setWordIndex(wordIndex + 1);
      }, 120); // Slower speed
      return () => clearTimeout(timeout);
    }
  }, [wordIndex, words]);

  // Replace \n\n with <br/><br/>
  const formattedText = displayedText.split('\n\n').map((para, idx) => (
    <span key={idx}>
      {para}
      {idx < displayedText.split('\n\n').length - 1 && <><br/><br/></>}
    </span>
  ));

  return (
    <div className='container mx-auto mt-[-70px] mb-32 px-2 border-b-1'>
      <div className="card lg:card-side bg-base-100 shadow-sm w-full flex flex-col lg:flex-row items-center lg:items-stretch">
        <figure className='w-full lg:w-[45%] h-56 lg:h-auto flex-shrink-0'>
          <img
            className='h-full w-full object-cover object-top rounded-t-lg lg:rounded-t-none lg:rounded-l-lg'
            src="/images/houssam.jpg"
            alt="Album" />
        </figure>
        <div className="card-body w-full lg:w-[50%]">
          <p className="mb-0 text-lg font-light pt-6 lg:pt-32">
            {formattedText}
            {displayedText.includes('LinkedIn') && (
              <a href="https://www.linkedin.com/in/houssam-eddine-sehlaoui" target="_blank" rel="noopener noreferrer" className='text-blue-600'> LinkedIn</a>
            )}
          </p>
          <div className="card-actions justify-end mt-4 lg:mt-0">
            <button className="badge badge-outline w-[110px] h-[32px]">Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
