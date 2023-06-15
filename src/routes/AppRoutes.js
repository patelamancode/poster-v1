import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {PrivateRoutes } from "./PrivateRoutes";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from '../pages/home/Home';
import Layout from '../components/layout/Layout';


const AppRoutes = () => {
    // const userToken = true;
  return (
    <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path='/' element={<PrivateRoutes><Layout /></PrivateRoutes>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
    </div>
  )
}

export default AppRoutes
