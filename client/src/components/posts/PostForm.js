import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [address, setAddress] = useState('');
  const [game, setGame] = useState('');
  const [numPlayers, setNumPlayers] = useState('');
  const [gameDate, setGameDate] = useState('');

  return (
    <div className='post-form'>
      <div className='bg-danger p'>
        <h3>What Game, When and Where Do You Want to Play?</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ text: text, address: address, game: game, numPlayers: numPlayers, gameDate: gameDate });
          setText('');
          setAddress('');
          setGameDate('');
          setNumPlayers('');
          setGame('');
        }}
      >
        <input
          name="game"
          type='text'
          placeholder="Name of Game(s)"
          value={game}
          onChange={e => setGame(e.target.value)}
          required
        />
        <small className='form-text'>
          What game do you want to play?
        </small> <br />
        <input
          name="address"
          type='text'
          placeholder="Location"
          value={address}
          onChange={e => setAddress(e.target.value)}
          required
        /> 
        <small className='form-text'>
          Where do you want to meet up?
        </small><br />
        <input
          name="date"
          type='date'
          placeholder="date"
          value={gameDate}
          onChange={e => setGameDate(e.target.value)}
          required
        />
        <small className='form-text'>
          What day is this taking place?
        </small> <br />
        <select name="numPlayers" value={numPlayers} onChange={e => setNumPlayers(e.target.value)}>
          <option value="0">Number of players</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9 or more</option>
        </select> 
        <small className='form-text'>
          How many other players can come?
        </small><br />
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Describe the Event and Suggest a Time'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        

        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
