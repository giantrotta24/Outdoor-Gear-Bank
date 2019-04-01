import React from "react";
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }, isAuthenticated) => {
    return (
        <Route
            {...rest}
            render={props =>
                !isAuthenticated ? (
                    <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                ) : (
                    <Component {...props} />
                    )
            }
        />
    );
}

export default PrivateRoute;

