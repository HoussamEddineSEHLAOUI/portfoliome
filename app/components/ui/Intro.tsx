import React from 'react'
import { FaArrowDown } from 'react-icons/fa'; // Importing the arrow-down icon

const Intro = () => {
  return (
    <div className='md:w-[100%] md:h-[100vh] h-[100vh] custom-gradient text-white'>
      <div className='container mr-auto ml-auto md:pt-60 md:pl-28 pt-36 pl-7'>
        <h5 className='md:mb-[2.5rem] mb-[1rem] text-xl md:text-4xl text-brand-secondary dark:text-slate-200 typography'>Hello, my name is</h5>
        <h1 className='mb-8 text-3xl md:text-5xl font-bold text-brand-primary dark:text-white typography'>Houssam Eddine Sehlaoui.</h1>
        <h1 className='mb-[2.5rem] text-2xl md:text-4xl text-brand-secondary dark:text-slate-200 typography'>I&apos;m a Software Engineer | FullStack Developer</h1>
        <h4 className='mb-[1rem] text-lg mr-5'>I&apos;m an enthusiastic Software engineer with multiple experiences on various web and mobile projects.</h4>
        <h5 className='text-sm md:text-xs text-brand-secondary dark:text-slate-200 typography text-gray-400'>I am currently seeking new job opportunities</h5>
      </div>
      <div className='flex justify-center md:mt-52 mt-24 animate-bounce'>
        <FaArrowDown className='text-white text-3xl' />
      </div>
    </div>
  )
}

export default Intro
