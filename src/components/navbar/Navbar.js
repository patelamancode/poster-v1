import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span>Poster</span>
        </NavLink>
        <div className="search">
          {/* <SearchOutlinedIcon /> */}
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        {/* {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )} */}
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt="profile"
          />
          <span>Hemant Garg</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
