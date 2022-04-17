import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from '@material-ui/icons/Timeline';
import ChatIcon from "@material-ui/icons/Chat";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import SchoolIcon from '@mui/icons-material/School';


function Header() {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="header">
      <div className='header__right'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={HomeIcon} title="Home" />
        </Link>
        <Link to='/profile/my' style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={AccountBoxIcon} title="Profile" />
        </Link>
        <Link to='/course/my' style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={SchoolIcon} title="My Course" />
        </Link>
        <Link to='/interest' style={{ textDecoration: 'none' }}>
          <HeaderOption Icon={TimelineIcon} title="Interests" />
        </Link>
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        {!isAuthenticated && (
          <button style={{ outline: 'none', border: 'none', background: 'none' }} onClick={() => loginWithRedirect()}>
            <HeaderOption Icon={LoginIcon} title="Log in" />
          </button>
        )}
        {isAuthenticated &&
          <button style={{ outline: 'none', border: 'none', background: 'none' }} onClick={() => logout()}>
            <HeaderOption Icon={LogoutIcon} title="Log Out" />
          </button>}
      </div>

    </div>
  );
}

export default Header