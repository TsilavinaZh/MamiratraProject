import React from 'react';

const Card = ({ title, description, type }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={type === "front-end" ? "/frontend-image.jpg" : "../img/me.jpg"} alt="Technologie" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">type</div>
          <h2 className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900">nothing</h2>
          <p className="mt-2 text-base text-gray-500">Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
