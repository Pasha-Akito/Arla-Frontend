import React from 'react'
import './InputOption.css';

export default function InputOption({ Icon, title, colour }) {
    return (
        <div className='inputOption'>
            <Icon style={{ colour: colour }} />
            <h4>{title}</h4>
        </div>
    );
}