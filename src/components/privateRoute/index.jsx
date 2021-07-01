import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    const isLogedIn = localStorage.length === 0;
    
    return (

        <Route {...rest} render={props => (
            !isLogedIn ?
                <Component {...props} />
            : <Redirect to="/superHeroChallenge" />
        )} />
    );
};

export default PrivateRoute;