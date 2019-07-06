import React, {Component} from "react";
// import Nav from '../components/Nav';

class ProfileCard extends Component {
    // the statefulness of this component does not work yet

    state = {
        firstName: '',
        lastName: '',
        userPic: ''
    }

    handleUserInputChange = event => {
        const { name, value } = event.target;

        this.setState({
        [name]: value
        });
    }
    handleUserSubmit = event => {
        event.PreventDefault();

        this.setState({
            firstName: '',
            lastName: '',
            userPic: ''
        })

    }

    render() {
        return (
            <div className="profile-container">
                <div className="profile-head">
                    <img src={this.state.userPic} alt='user profile pic'/>
                    {this.state.firstName}
                    {this.state.lastName}
                </div>
            </div>
        )
    }
}

export default ProfileCard;