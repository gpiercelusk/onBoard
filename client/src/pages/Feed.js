import React from 'react';
import Nav from '../components/Nav';

function Feed() {
    return (
        <div className="feed">
            <Nav />
            <div className="feed-container">
                <div className="feed-items">
                    {/* will create a component that takes created post and uses either .map() or forEach() to display them here. Not exactly sure if we will implement profile pictures as demonstrated in the wireframe */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem culpa magni dolore id odio dolor commodi veniam minus temporibus, optio sapiente exercitationem itaque facilis, et ut vero similique amet atque.
                </div>
            </div>
        </div>
    )
}

export default Feed;