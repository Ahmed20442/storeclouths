import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Profile = ({ user }) => {
    const history = useHistory();
    const [editedUser, setEditedUser] = useState({ ...user });
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            // Send a PUT request to update user information
            const response = await axios.put(`http://localhost:8000/users/${user.id}`, editedUser);
            console.log(response.data);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating profile:', error.response.data.error);
        }
    };

    const handleCancelClick = () => {
        setEditedUser({ ...user });
        setIsEditing(false);
    };

    const handleInputChange = (field, value) => {
        setEditedUser((prevUser) => ({ ...prevUser, [field]: value }));
    };

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <div>
                <label>Username:</label>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedUser.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                    />
                ) : (
                    <p>{user.username}</p>
                )}
            </div>

            <div>
                <label>Email:</label>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedUser.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                ) : (
                    <p>{user.email}</p>
                )}
            </div>

            <div>
                <label>Phone:</label>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedUser.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                ) : (
                    <p>{user.phone}</p>
                )}
            </div>

            {/* Add other fields as needed */}

            {isEditing ? (
                <div>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                </div>
            ) : (
                <button onClick={handleEditClick}>Edit Profile</button>
            )}

            <button onClick={() => history.push('/Header')}>Back to Home</button>
        </div>
    );
};

export default Profile;
