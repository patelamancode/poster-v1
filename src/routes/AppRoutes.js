import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {PrivateRoutes } from "./PrivateRoutes";
import Layout from "../components/layout/Layout"
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from '../pages/home/Home';
import UserProfile from "../pages/userProfile/UserProfile";
import Bookmark from "../pages/bookmark/Bookmark";
import Liked from "../pages/liked/Liked";
import Explore from "../pages/explore/Explore";

const AppRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path='/' element={<PrivateRoutes><Layout /></PrivateRoutes>}>
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/bookmarked' element={<Bookmark />} />
            <Route path='/liked' element={<Liked />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/profile' element={<UserProfile />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
    </div>
  )
}

export default AppRoutes
