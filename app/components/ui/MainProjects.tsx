
import React from 'react'
import CardProject from '../modules/projects/cardProject'
import mainProjects from '../Data';


const MainProjects = () => {
  return (
    <div className='container mr-auto ml-auto'>
      <div className='flex align-middle justify-between mt-8 mb-5'>
        <label className='text-2xl md:text-3xl font-bold text-brand-primary typography md:ml-28 ml-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Projects</label>
        <label className='text-sm font-extralight text-brand-primary typography md:mr-28 mr-2 '>View more</label>
      </div>
      <div className='flex align-middle md:justify-start md:flex-wrap md:pl-28 pr-1 pl-1 w-[100%] overflow-x-scroll'>
        {mainProjects.map((project) => (
            <CardProject 
              key={project.id} 
              name={project.name}
              discription={project.discription}
              technologies={project.technologies}
              />
        ))}
      </div>
    </div>
  )
}

export default MainProjects
