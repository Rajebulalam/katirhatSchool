import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const student = localStorage.getItem('student');

    const location = useLocation();

    if (!student) {
        return <Navigate to="/studentLogin" state={{ from: location }} replace />;
    }
    return children;
};

export default ProtectedRoute;