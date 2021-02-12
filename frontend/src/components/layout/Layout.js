import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'



class Layout extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (

            <div className='my-2 my-lg-0'>
                <ul className="navbar-nav ml-auto">
                    <span className="navbar-text mr-3">
                        {user ? `welcome ${user.username}` : ""}
                    </span>

                    <li className="nav-item ">
                        <button className=" nav-link btn btn-danger btn-sm text-light" onClick={this.props.logout} >logout</button>
                    </li>

                </ul>
            </div>
        );

        const geustLinks = (

            <div className='my-2 my-lg-0'>
                <ul className="navbar-nav ml-auto">


                    <li className="nav-item ">

                        <a className="nav-link" href="http://localhost:8000/#/register"><button className="btn btn-outline-info my-2 my-sm-0"  >Register</button></a>



                    </li>
                    <li className="nav-item ">

                        <a className="nav-link" href="http://localhost:8000/#/login"><button className="btn btn-outline-success my-2 my-sm-0"  >login</button></a>
                    </li>

                </ul>
            </div>
        );

        return (
            <Fragment>

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                    <Link to='/'><span className="navbar-brand" ><img height="55" src="/static/frontend/e-9rayti1-02.png" /></span></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Posts</a>
                                <div className="dropdown-menu" >
                                    <a className="dropdown-item" href="http://localhost:8000/#/posts">Posts</a>
                                    <a className="dropdown-item" href="http://localhost:8000/#/form"> Create Posts</a>


                                </div>
                            </li>
                            <li className="nav-item ">

                                <a className="nav-link" href="http://localhost:8000/#/cours">courses</a>


                            </li>

                        </ul>

                        {isAuthenticated ? authLinks : geustLinks}

                    </div>
                </nav>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Layout);