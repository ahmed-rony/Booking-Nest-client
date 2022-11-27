import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    // const [loggedIn] = useAuth();
    const location = useLocation();
    
    return (
        <>
            
        </>
        // loggedIn.email
        // ? <Outlet />
        // : <Navigate to='/login' state={{ from : location }} replace />
    );
};

export default PrivateRoute;