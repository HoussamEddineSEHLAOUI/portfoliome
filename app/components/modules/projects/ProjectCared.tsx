import React from "react";

const ProjectCared = ({name, discription, technologies}) => {
  return (
    <div className="card bg-base-100 w-[18rem] md:w-[21rem] md:mb-5 md:mr-5 m-1 border dark:bg-gray-700">
      <div className="card-body md:w-80 md:h-80">
        <h2 className="card-title md:mt-7 mt-2">
          {name}
        </h2>
        <p>{discription}</p>
        <div className="card-actions justify-end md:mb-7 mb-2">
          {technologies.map((technologie, key) => (
            <div key={key} className="badge badge-outline">{technologie}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCared;
