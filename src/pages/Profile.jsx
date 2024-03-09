import React from 'react';
import { useAuth } from '../utils/AuthContext'; 

const Profile = () => {
    const { user } = useAuth();

    return (
        <div>
            {user ? (
                <p>Welcome, {user.name}</p> // Assuming 'name' is the property that holds the username
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
};

export default Profile;
