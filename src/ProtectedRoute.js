import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
    isAccessible,
    redirectToPath,
    component: Component,
    ...rest
}) => (
    <Route
        {...rest}
        render={props => (
            isAccessible ?
                <Component {...props} /> :
                <Redirect
                    to={{
                        pathname: redirectToPath,
                        state: { from: props.location },
                    }}
                />
        )}
    />
);

ProtectedRoute.propTypes = {
    isAccessible: PropTypes.bool.isRequired,
    redirectToPath: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    location: PropTypes.shape({
        /** Current exact location of page */
        pathname: PropTypes.string,
    }),
};

ProtectedRoute.defaultProps = {
    location: {},
};

export default ProtectedRoute;
