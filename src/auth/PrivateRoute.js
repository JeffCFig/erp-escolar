import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('userToken'); // Comprueba si hay un token
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
