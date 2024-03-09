

import React from 'react';
import CourseCard from './CourseCard';

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
 
  ];

  return (
   <div>
    <CourseCard/>
   </div>
  );
};

export default CoursesPage;
