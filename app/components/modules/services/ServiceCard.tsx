import React from "react";

const ServiceCard = ({name, discription}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm m-5 border">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
