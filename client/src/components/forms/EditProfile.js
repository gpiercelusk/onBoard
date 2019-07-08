import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile, getCurrentProfile } from "../../actions/profile";


const EditProfile = ({ profile: { profile, loading }, createProfile, getCurrentProfile, history }) => {
  const [formData, setFormData] = useState({
    location: "",
    status: "",
    games: ""
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      games: loading || !profile.games ? '' : profile.games,
    });
    // eslint-disable-next-line
  }, [loading]);


  const {
    location,
    status,
    games
  } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's get some information to get you playing ASAP
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* Select Status</option>
            <option value='Looking to Play ASAP'>Looking to Play ASAP</option>
            <option value='Looking to Play Later'>Looking to Play Later</option>
          </select>
          <small className='form-text'>
            Do you want to play ASAP or at a later date?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            City & state suggested (eg. Durham, NC)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Favorite Games'
            name='games'
            value={games}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            What are your favorite board Games?
          </small>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile },
)(withRouter(EditProfile));