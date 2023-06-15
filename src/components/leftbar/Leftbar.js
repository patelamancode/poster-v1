import React from 'react'
import "./Leftbar.scss"

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' alt='' />
            <span>Hemant Garg</span>
          </div>
          <div className="item">
            <p>Home</p>
          </div>
          <div className="item">
            <p>Explore</p>
          </div>
          <div className="item">
            <p>Bookmark</p>
          </div>
          <div className="item">
            <p>Liked</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar
