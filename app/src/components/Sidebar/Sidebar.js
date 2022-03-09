import React from 'react';
import './Sidebar.css';
import { Avatar } from "@material-ui/core";



function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>

      <div className='sidebar__top'>
        <img
          src="/gmitlogo.jpg"
          alt='gmit logo'
        />
        <Avatar className="sidebar__avatar" />
        <h2>Your Name</h2>
        <h4>Example@Email.com</h4>
      </div>

      <div className='sidebar__stats'>

        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">300</p>
        </div>

        <div className="sidebar__stat">
          <p>Views of your posts</p>
          <p className="sidebar__statNumber">5999</p>
        </div>

      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('Business')}
        {recentItem('Basketball')}
        {recentItem('Chess')}
        {recentItem('Software Development')}
        <h4>Followed Interests</h4>
        {recentItem('Chess')}
        {recentItem('Football')}
      </div>

    </div>
  )
}

export default Sidebar