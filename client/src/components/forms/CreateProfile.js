import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const CreateProfile = props => {
  const [formData, setFormData] = useState({
    location: "",
    status: ""
  });

  const {
    location,
    status
  } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    //createProfile(formData, history);
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
            City & state suggested (eg. Boston, MA)
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

CreateProfile.propTypes = {

}

export default CreateProfile