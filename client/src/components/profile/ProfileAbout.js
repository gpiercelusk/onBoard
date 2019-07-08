import React from 'react';


const ProfileAbout = ({
  profile: {
    games
  }
}) => (
    <div className='profile-about bg-light p-2'>
      <h2 className='text-primary'>Favorite Games</h2>
      <div className='skills'>
        {games.map((game, index) => (
          <div key={index} className='p-1'>
            <i className='fas fa-dice-d20' /> {game}
          </div>
        ))}
      </div>
    </div>
  );


export default ProfileAbout;