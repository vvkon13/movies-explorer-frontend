import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

export const ProtectedRoute = ({ element: Component, ...props }) => {
  const appContext = useContext(AppContext);

  return appContext.loggedIn ? <Component {...props} /> : <Navigate to='/sign-in' replace />
}