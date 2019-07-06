import React from 'react';
import ProfileCard from '../components/ProfileCard';
import Nav from '../components/Nav';
import AddPost from '../components/AddPost';

function Profile() {
    return (
        <div className="profile-container">
            <Nav />
            <ProfileCard />

            <AddPost />
        </div>
    )
}

export default Profile;