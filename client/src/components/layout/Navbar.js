import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
          <i className="fas fa-users" />{' '}
          Players</Link>
      </li>
      <li>
        <Link to='/posts'>
        <i className="fas fa-sticky-note" />{' '}Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
        <i className="fas fa-users" />{' '}Players</Link>
      </li>
      <li>
        <Link to='/register'>
        <i class="fas fa-clipboard"></i>{' '}Register</Link>
      </li>
      <li>
        <Link to='/login'>
        <i class="fas fa-sign-in-alt"></i>{' '}Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-danger">
      <h1>
        <Link to='/'>
          <i className="fas fa-dice-d20" /> onBoard
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar)
