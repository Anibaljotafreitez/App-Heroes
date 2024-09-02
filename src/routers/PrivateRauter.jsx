import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router';
import { LoginPage } from '../auth/pages/LoginPage';

export const PrivateRauter = ({children}) => {

    const {logged}= useContext( AuthContext);

  return (logged)? children:<Navigate to='/login'/> 

  
}