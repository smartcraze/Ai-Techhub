import React from 'react';
import Course from './Course';

const CoursesPage = () => {
  const courses = [
    {
      title: 'JavaScript Fundamentals',
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
    {
      title: 'C programming',
      url: 'https://youtu.be/87SH2Cn0s9A?si=shhEC8g3TO_7pBlO',
    },
    {
      title: 'DSA',
      url: 'https://youtu.be/-ETQ97mXXF0?si=BX88CUpK0QIMd1_g',
    },
    {
      title: 'Java',
      url: 'https://youtu.be/UmnCZ7-9yDY?si=2kNxrCl7b6tlrQVf',
    },
   
  ];

  return (
    <div className="container mx-auto mt-8 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        hi
      {course.map((course, index) => (
        <Course key={index} title={course.title} url={course.url} />
      ))}
    </div>
  );
};

export default CoursesPage;