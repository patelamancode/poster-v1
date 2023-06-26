import React from 'react'
import "./Leftbar.scss"
import { NavLink } from 'react-router-dom'

const Leftbar = () => {
  
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <NavLink to="/profile"><img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' alt='' /></NavLink>
            <span>Hemant Garg</span>
          </div>
          <div className="item">
            <NavLink className="active" to="/home"><p>Home</p></NavLink>
          </div>
          <div className="item">
            <NavLink to="/explore"><p>Explore</p></NavLink>
          </div>
          <div className="item">
            <NavLink to="/bookmarked"><p>Bookmark</p></NavLink>
          </div>
          <div className="item">
            <NavLink to="/liked"><p>Liked</p></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar
