import React from "react";
import {  Route, Redirect } from 'react-router-dom';
import axios from 'axios';


const PrivateRoute = ({ component: Component, ...rest }, isAuthenticated) => {
    

    return (
        <Route
            {...rest}
            render={props => (
                isAuthenticated === true ? (
                    <Component {...{ ...props }} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            )
            }
        />
    );
}

export default PrivateRoute;


// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const isAuthenticated = {
//         authenticated: true
//     }

//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 isAuthenticated.authenticated ? (
//                     <Component { ...props } />
//                 ) : (
//                         <Redirect
//                             to={{
//                                 pathname: "/login",
//                                 state: { from: props.location }
//                             }}
//                         />
//                     )
//             }
//         />
//     );
// }

