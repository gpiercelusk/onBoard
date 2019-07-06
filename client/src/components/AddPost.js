import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class AddPost extends Component {
    state = {
        eventMessage: '',
        eventLocation: '',
        eventDateTime: '',
        eventDuration: ''
    };

    handlePostInput = event => {
        const { name, value } = event.target;

        this.setState({
          [name]: value
        });
    };
    handlePostSubmit = event => {
        event.preventDefault();

        this.setState({
        eventMessage: '',
        eventLocation: '',
        eventDateTime: '',
        eventDuration: ''
        });
    }

    render() {
        return (
            <div className="post-form-container">
                <Link to='/feed' >
                    <button type='reset'>Cancel</button>
                </Link> 
                <input 
                    type="text"
                    value={this.state.eventMessage}
                    name='eventMessage'
                    onChange={this.handlePostInput}
                    placeholder='What do you want to play?'/>
                <Link to='/feed' 
                onClick={this.handlePostSubmit}>
                    Send
                </Link>
                <div className="details">
                    <select value="1">
                        {/* the options for location can be created from the gMap component */}
                        <option name="Raleigh" id="1">Location</option>
                    </select>
                    <select value="2">
                        <option name="Settlers of Catan" id="1">Game</option>
                    </select>
                </div>
                

            </div>
        )
    }
    
}

export default AddPost;