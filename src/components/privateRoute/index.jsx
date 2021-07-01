import React from 'react';
import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loginContext } from '../../context/loginContext';


const PrivateRoute = ({component: Component, ...rest}) => {
    const {isLogin} = useContext(loginContext)
    return (

        <Route {...rest} render={props => (
            isLogin ?
                <Component {...props} />
            : <Redirect to="/superHeroChallenge" />
        )} />
    );
};

export default PrivateRoute;