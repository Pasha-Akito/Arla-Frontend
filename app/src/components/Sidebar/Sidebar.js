import React from 'react';
import './Sidebar.css';
import { Avatar } from "@material-ui/core";
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ profile }) => {

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
        <Avatar className="sidebar__avatar" src={profile.image} />
        <h2>{profile.name}</h2>
        {profile.graduatedCoursesConnection.edges.map((course) => (
          <h4> {course.node.name} {course.year} </h4>
        ))}
      </div>


      <div className='sidebar__bottom'>
        <h4>Followed Interests</h4>
        {profile.interests.map((interests) => (
          <div>
            <i />
            <Link to={`/interest/${interests.name}`} style={{ textDecoration: 'none' }}>
              {recentItem(interests.name || 'Interests?')}
            </Link>
          </div>
        ))}
      </div>

    </div>

  )
}

export default Sidebar