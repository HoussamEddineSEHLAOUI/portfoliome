import React from 'react'
import ProjectCared from './ProjectCared';
import mainProjects from '../../Data';



const ProjectList = ({ searchTerm, selectedTechnology }) => {
  const filteredProjects = mainProjects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTechnology = selectedTechnology
      ? project.technologies.includes(selectedTechnology.name)
      : true;
    return matchesSearch && matchesTechnology;
  });

  return (
    <div className='pl-2 pr-2 pb-2 md:pt-10'>
        <div className='flex align-top md:justify-start flex-wrap'>
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                    <ProjectCared 
                    key={project.id} 
                    name={project.name}
                    discription={project.discription}
                    technologies={project.technologies}
                    />
                ))
            ) : (
                <p className='text-center w-full text-gray-500'>No projects found matching your search criteria.</p>
            )}
        </div>
    </div>
  );
};

export default ProjectList;
