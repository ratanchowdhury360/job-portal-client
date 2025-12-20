import React, { use } from 'react';

import { Navigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {

    const { user } = use(AuthContext);

    if (!user) {
        <Navigate to="/signIn"></Navigate>
    }

    return children;
};

export default PrivateRoute;