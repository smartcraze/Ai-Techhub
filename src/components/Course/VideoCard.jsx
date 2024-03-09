// VideoCard.js
import React from 'react';
import Course from './Course';

const VideoCard = ({ title, url }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={url}
          title={title}
          className="w-full h-full rounded-md"
          allowFullScreen
        ></iframe>
      </div>
      <Course/>
    </div>
  );
};

export default VideoCard;
