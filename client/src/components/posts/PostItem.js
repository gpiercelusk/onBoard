import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date, game, numPlayers, address, gameDate },
  showActions

}) => (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <h3 className='my-1'>Game: {game}</h3>
        <span><b>Date: </b></span><span className='my-1'><Moment format='MM/DD/YYYY'>{gameDate}</Moment></span><br />
        <span><b>Location: </b></span><span className='my-1'>{address}</span><br />
        <span><b>Number of Players: </b></span><span className='my-1'>{numPlayers}</span>
        <p className='my-1'><b>Description: </b><br />{text}</p>

        <p className='post-date'>
          Posted on <Moment format='MM/DD/YYYY'>{date}</Moment>
        </p>

        {showActions && (
          <Fragment>
            <button
              onClick={() => addLike(_id)}
              type='button'
              className='btn btn-light'
            >
              <i className='fas fa-sign-in-alt' />{' '}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              onClick={() => removeLike(_id)}
              type='button'
              className='btn btn-light'
            >
              <i className='fas fa-sign-out-alt' />
            </button>
            <Link to={`/posts/${_id}`} className='btn btn-primary'>
              Discussion{' '}
              {comments.length > 0 && (
                <span className='comment-count'>{comments.length}</span>
              )}
            </Link>
            <a href = {`https://www.google.com/maps/search/?api=1&query=${address}`} target="__blank" title="Open Map">
            <button
              type='button'
              className='btn btn-primary'
            >
              <i className='fa fa-map' />
            </button>
            </a>
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={() => deletePost(_id)}
                type='button'
                className='btn btn-danger'
              >
                <i className='fas fa-times' />
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
