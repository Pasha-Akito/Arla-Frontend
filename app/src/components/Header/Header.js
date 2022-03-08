import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from '@material-ui/icons/Timeline';
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
    return (
      <div className="header">
          <div className='header__left'>
            <img
                src="/arlaarla.png"
                alt='arla logo'
            />
            <div className='header__search'>
                <SearchIcon />
                <input type="text" />
            </div>
          </div>

          <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={TimelineIcon} title="My Network"/>
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar={true} title="Log Out"/>
        </div>
    
      </div>
    );
  }

export default Header