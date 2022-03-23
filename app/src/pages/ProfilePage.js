import React from 'react'
import './ProfilePage.css'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar} from '@material-ui/core'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <div>
        <div className='profile'>

          <div className='profile__top'>
            <Avatar src={user.picture} className='profile__avatar' />

            <h4>{user.name}</h4>

          </div>
        </div>
      </div>
    )
  )
}

export default Profile