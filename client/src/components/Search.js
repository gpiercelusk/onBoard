import React, {Component} from "react";
// import Nav from '../components/Nav';


//This component is to seacrh for games/events 
//and will called by the Discover page along with Tile component


class Search extends Component {

    state = {
        searchQuery: '',
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
            searchQuery: ''
        })

    }

    render() {
        return (
            <div className="search-container">
                    {this.state.searchQuery}
            </div>
        )
    }
}

export default Search;