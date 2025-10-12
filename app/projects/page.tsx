'use client'
// This component is a button that toggles between light and dark mode.

import React, { useState } from 'react';
import IntroPage from '../components/ui/IntroPage';
import ProjectList from '../components/modules/projects/ProjectList';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import Technologies from '../components/Data/Technologies';
import FilterTechnologies from '../components/modules/projects/FilterTechnologies';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTechnologyFilter = (tech) => {
    setSelectedTechnology(tech);
  };

  return (
    <div>
      <Navbar />
      <IntroPage title="Projects" />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col mb-6">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="input input-bordered w-full mb-4"
          />
          <FilterTechnologies
            technologies={Technologies}
            onFilter={handleTechnologyFilter}
          />
        </div>

        <ProjectList searchTerm={searchTerm} selectedTechnology={selectedTechnology} />
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
