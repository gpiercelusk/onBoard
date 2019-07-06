import React from 'react';
import Search from '../components/Search';
import Tile from '../components/Tile'
import Nav from '../components/Nav';

//based on prasen's coversation with deyon, 
//Discover page will be in Nav and it'll display 
//a search bar and tiles of the events

function Discover() {
    return (
        <div className="discover-container">
            <Search />
            <Tile />
        </div>
    )
}

export default Discover;