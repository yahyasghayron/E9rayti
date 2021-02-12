import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={
            props => {
                if (auth.isLoading) {
                    console.log("loading")
                    return <h2>loading ...</h2>;
                } else if (!auth.isAuthenticated) {
                    console.log('not autenticated ')
                    return <Redirect to="/login" />;
                } else {
                    console.log("private:auth khedama")
                    return <Component {...props} />;
                }
            }
        }
    />
);


const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(PrivateRoute);