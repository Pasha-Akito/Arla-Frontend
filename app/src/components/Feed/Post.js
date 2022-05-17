import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom'

const Post = ({ post }) => {

    return (
        <div className='post'>
            <div className='post__header'>
                <Link to={`/profile/${post.node.creator.id || 'my'}`} style={{ textDecoration: 'none' }}>
                    <Avatar src={post.node.creator.image} alt='' />
                </Link>
                <div className='post__info'>
                    <h2>{post.node.creator.name || 'name'}</h2>
                    <p>{post.date || 'date'}</p>
                </div>
            </div>

            <div className='post__body'>
                <p>{post.node.content || 'content'}</p>
            </div>

            <div className='post__buttons'>

            </div>
        </div>
    );
}

export default Post