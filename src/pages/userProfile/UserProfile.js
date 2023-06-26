import React from 'react';
import "./userProfile.scss"

const UserProfile = () => {
  return (
    <div className='user-page'>
      <div className='profile-container'>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt='loading' />
        <div className='profile-description'>
          <div className='username'>
            <h1>Aman Patel</h1>
            <p>@username</p>
          </div>
          <div className='user-data'>
            <p className='followers'>1 <span>Followers</span></p>
            <p>3 <span>Following</span></p>
          </div>
          <a href='/'>View code</a>
          <p className='logout'>Logout</p>
        </div>
      </div>
      {/* post card's of logged in user */}
      <div>
        <p>logged in user posts</p>
      </div>
    </div>
  )
}

export default UserProfile
