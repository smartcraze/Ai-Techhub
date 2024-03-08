import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Welcome to my profile!</div>
          <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit nisi eu metus tincidunt, in pretium dolor aliquam.</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind CSS</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
