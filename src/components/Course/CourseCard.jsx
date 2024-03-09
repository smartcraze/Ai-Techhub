import React from "react";

const CourseCard = ({ src, title }) => {
  return (
    <div className="">
      {/* Video Section */}
      <div className="relative aspect-w-16 aspect-h-9">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={src}
          title={title}
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
      {/* Title Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
    </div>
  );
};

export default CourseCard;
