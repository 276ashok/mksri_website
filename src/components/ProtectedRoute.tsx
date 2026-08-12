import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  console.log('ProtectedRoute - isAuthenticated:', isAuthenticated); // Added log
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
