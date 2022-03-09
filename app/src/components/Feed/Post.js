import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import InputOption from './InputOption';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

function Post({ name, description, message, photoUrl }) {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar />
                <div className='post__info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className='post__body'>
                <p>{message}</p>
            </div>

            <div className='post__buttons'>
                <InputOption Icon={ThumbUpIcon} title="Like" colour="black" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" colour="black" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" colour="black" />
                <InputOption Icon={SendOutlinedIcon} title="Send" colour="black" />
            </div>
        </div>
    );
}

export default Post