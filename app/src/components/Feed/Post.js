import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

const Post = ({ post }) => {

    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar />
                <div className='post__info'>
                    <h2>{post.node.creator.name}</h2>
                    <p>{post.date}</p>
                </div>
            </div>

            <div className='post__body'>
                <p>{post.node.content}</p>
            </div>

            <div className='post__buttons'>

            </div>
        </div>
    );
}

export default Post