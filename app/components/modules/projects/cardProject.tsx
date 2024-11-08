import React from "react";

const cardProject = ({name, discription, technologies}) => {
  return (
    <div className="card bg-base-100 md:w-[21rem] md:mb-5 md:mr-5 m-1 md:border dark:bg-gray-700">
      <div className="card-body w-80 h-80">
        <h2 className="card-title md:mt-7">
          {name}
        </h2>
        <p>{discription}</p>
        <div className="card-actions justify-end md:mb-7">
          {technologies.map((technologie, key) => (
            <div key={key} className="badge badge-outline">{technologie}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default cardProject;
