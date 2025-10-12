import React from 'react';

const FilterTechnologies = ({ technologies, onFilter }) => {
    const [selectedTech, setSelectedTech] = React.useState(null);

    const handleFilterClick = (tech) => {
        setSelectedTech(tech);
        onFilter(tech);
    };

    return (
        <div style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {technologies.map((tech) => (
                <button
                    key={tech.id}
                    className={`badge badge-outline mr-2 px-3 py-3 text-s ${selectedTech === tech ? 'bg-gray-300 text-gray-700' : ''}`}
                    onClick={() => handleFilterClick(tech)}
                >
                    {tech.name}
                </button>
            ))}
        </div>
    );
};

export default FilterTechnologies;
