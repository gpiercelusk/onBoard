import React from 'react';
import ProfileCard from '../components/ProfileCard';
import Nav from '../components/Nav';

function Profile() {
    return (
        <div className="profile-container">
            <Nav />
            <ProfileCard />
        </div>
    )
}

export default Profile;