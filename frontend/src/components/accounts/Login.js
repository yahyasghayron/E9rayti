import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


class Login extends Component {
    state = {
        username: '',

        password: '',

    }
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.login(this.state.username, this.state.password);

    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/posts' />;
        }

        const { username, password } = this.state;
        return (
            <Fragment>

                <div className='col-7 m-auto pt-4'>
                    <div className="card card-body mt-5">

                        <h2 className='text-center'>Login</h2>
                        <div className='container-sm' style={{ desplay: 'block', 'max-width': '400px' }}>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>username</label>
                                    <input
                                        className="form-control"
                                        name="username"
                                        type="text"
                                        onChange={this.onChange}
                                        value={username} />
                                </div>

                                <div className="form-group">
                                    <label>password</label>
                                    <input
                                        className="form-control"
                                        name="password"
                                        type="password"
                                        onChange={this.onChange}
                                        value={password} />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Log-in </button>
                                </div>
                        D'ont have an account?
                        <p> <Link to="/register">register</Link> </p>

                            </form>
                        </div>
                    </div>
                </div>
                <div style={{ height: '100px', desplay: 'block' }}></div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login);