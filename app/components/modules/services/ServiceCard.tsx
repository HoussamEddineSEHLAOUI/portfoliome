import React from "react";

const ServiceCard = ({name, discription, url}) => {
  return (
    <div className="card bg-base-100 md:w-96  shadow-sm md:m-5 m-2 border">
      <figure className="md:w-[350px] w-[315px] md:w-[400px] h-[200px] md:h-[250px]">
        <img
          src={url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{discription}</p>
        <div className="card-actions justify-end">
          <button className="badge badge-outline h-9">Discover more</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
