import React, {  useContext } from 'react';
// import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
// import { AuthContext } from '../Auth/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext
    (AuthContext);

    if (loading) {
        return <progress className="progress w-56"></progress> 
        
    }
    if (user?.email) {
        return children;
        
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;