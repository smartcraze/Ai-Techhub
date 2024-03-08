import React from 'react';

const Course = ({ key, title, url }) => {
  return (
    <div key={key} className="max-w-md rounded overflow-hidden shadow-lg">
      {/* Embedded video */}
      <div className="relative">
        <iframe
          className="w-full h-48 md:h-64 object-cover"
          src={url}
          title={title}
          allowFullScreen
        ></iframe>
        {/* Overlay for play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white opacity-75 hover:opacity-100"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 0 1 1.557-.83l10 6a1 1 0 0 1 0 1.66l-10 6A1 1 0 0 1 3 15V5z"
            />
          </svg>
        </div>
      </div>
      {/* Card content */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default Course;
