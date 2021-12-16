import React from 'react';
import {publicRoutes} from "../routes";
import {Route, Routes, useNavigate} from "react-router";
import PrivateRoute from "./hoc/PrivateRoute";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkUser} from "../store/slices/verify";


const AppRouter = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isVerified = useSelector(({verify: {isVerified}}) => isVerified);

    useEffect(() => {
        dispatch(checkUser());
    }, [dispatch]);

    useEffect(() => {
        if (isVerified) {
            navigate('/');
        }
    }, [isVerified]);


    return (
        <React.Fragment>
            <Routes>
                {publicRoutes.map((route) => {
                    const component = route.isPrivate ? <PrivateRoute {...route} /> : route.Component;
                    return (
                        <Route key={route.path} path={route.path} element={component} exact/>
                    )
                })}
            </Routes>
        </React.Fragment>
    );
};

export default AppRouter;
