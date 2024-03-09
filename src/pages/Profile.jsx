import React from 'react';
import { useAuth } from '../utils/AuthContext'; // Update the path to your AuthContext file

const Profile = () => {
    const { user } = useAuth();

    return (
        <div className=" bg-gradient-to-br from-gray-900 to-black   flex items-center justify-center h-[90vh]">
            <div className="max-w-xs w-full">
                <div className="profile-card bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform duration-500 hover:rotate-y-180 perspective-1000 hover:shadow-2xl">
                    <div className="p-4 text-center">
                        <img className="w-32 h-32 mx-auto rounded-full transition-transform duration-500 hover:rotate-360" src="user.png" alt={user ? user.name : 'User Profile'} />
                        <h3 className="text-xl text-gray-900 font-medium mt-4">{user ? user.name : 'John Doe'}</h3>
                        <p className="text-gray-600">{user ? user.email : 'john@example.com'}</p>
                        <p className="text-gray-600">{user ? user.phone : '+977 9955221114'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
