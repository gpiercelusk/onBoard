import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-hat-wizard text-primary' /> Edit Profile
      </Link>
    </div>
  );
};

export default DashboardActions;
