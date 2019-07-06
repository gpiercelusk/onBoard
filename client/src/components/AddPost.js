import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class AddPost extends Component {
    state = {
        eventMessage: '',
        eventLocation: '',
        eventDateTime: '',
        // ^ will have separate modal within add-post
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
                    <select value="1">Location
                        {/* the options for location can be created from the gMap component */}
                        <option name="none" id="0">--Select Location--</option>
                        <option name="Raleigh" id="1">Raleigh</option>
                        <option name="Cary" id="2">Cary</option>
                    </select>
                    <select value="2">
                        <option name="none" id="0">--Select Game--</option>
                        <option name="Settlers of Catan" id="1">Settlers of Catan</option>
                        <option name="Uno" id="2">Uno</option>
                    </select>
                    {/* not super sold on the way duration will look/be used */}
                    <select value="3">
                        <option name="some time" id="1">Duration</option>
                    </select>
                    
                </div>
                

            </div>
        )
    }
    
}

export default AddPost;