

import React from 'react';

const CourseCard = ({ title, url }) => {
  return (
    <div className="p-4 shadow-md rounded-md bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={url}
          title={title}
          className="w-full h-full rounded-md"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CourseCard;
