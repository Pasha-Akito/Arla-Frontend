import React from 'react';
import './Feed.css';
import Post from './Post';

import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

function Feed() {
    return (
        <div className='feed'>

            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input type='text' placeholder='Start a post' />
                        <div style={{marginTop: '24px'}}>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='feed__inputOptions'>

                </div>
            </div>



            <Post
                name="Your name"
                description="Test"
                message="Testy testi testing test"
            />

        </div>
    )
}

export default Feed