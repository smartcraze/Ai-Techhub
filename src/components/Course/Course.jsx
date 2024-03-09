// Course.js
import React from 'react';
import VideoCard from './VideoCard';

const videoData = [
  {
    title: 'Introduction to JavaScript',
    url: 'https://www.youtube.com/embed/hdI2bqOjy3c',
  },
  {
    title: 'Python Basics',
    url: 'https://www.youtube.com/embed/rfscVS0vtbw?si=1KrNPLgG1lzmTSLJ',
  },
  {
    title: 'HTML & CSS Essentials',
    url: 'https://www.youtube.com/embed/UB1O30fR-EE',
  },
  // Add more video objects as needed
];

function Course() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Video Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            url={video.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Course;
