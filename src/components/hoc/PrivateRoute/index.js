import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";


const PrivateRoute = ({Component}) => {
    const isVerified = useSelector(({verify: {isVerified}}) => isVerified);

    if (!isVerified) {
        return <Navigate to={'/verify'}/>;
    }
    return Component
};

export default PrivateRoute;