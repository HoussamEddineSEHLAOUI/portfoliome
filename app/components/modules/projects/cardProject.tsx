import React from "react";

const cardProject = ({name, discription, technologies}) => {
  return (
    <div className="card bg-base-100 md:w-[20rem] md:mb-1 md:mr-1 m-1 border dark:bg-gray-700">
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
