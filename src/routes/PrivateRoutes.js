import React from 'react'
import { Navigate } from 'react-router-dom';


export const PrivateRoutes = ({children}) => {
     // sample token
  const userToken = true;
  if(!userToken) { 
    return (<Navigate to="/login" />) 
  }
    return children;

}

