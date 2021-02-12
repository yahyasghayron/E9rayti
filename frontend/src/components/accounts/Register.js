import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

class Register extends Component {
    state = {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: ''
    }
    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {

        e.preventDefault();

        console.log("submit")
        const { username, first_name, last_name, email, password, password2 } = this.state;
        if (password !== password2) {

            this.props.createMessage({ passwordsNotMatch: 'passwords do not match' });
        } else {

            const newUser = {
                username,
                first_name,
                last_name,
                email,
                password
            }
            this.props.register(newUser);
        }

    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/posts' />;
        }

        const { username, first_name, last_name, email, password, password2 } = this.state;
        return (
            <div className='col-md-8 m-auto pt-4'>
                <div className="card card-body mt-5">
                    <h2 className='text-center'>Register</h2>
                    <div className='container-sm' style={{ desplay: 'block', 'max-width': '500px' }}>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    className="form-control"
                                    name="username"
                                    type="text"
                                    onChange={this.onChange}
                                    value={username} />
                            </div>
                            <div className="form-group">
                                <label>First name</label>
                                <input
                                    className="form-control"
                                    name="first_name"
                                    type="text"
                                    onChange={this.onChange}
                                    value={first_name} />
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input
                                    className="form-control"
                                    name="last_name"
                                    type="text"
                                    onChange={this.onChange}
                                    value={last_name} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email"
                                    onChange={this.onChange}
                                    value={email} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    className="form-control"
                                    name="password"
                                    type="password"
                                    onChange={this.onChange}
                                    value={password} />
                            </div>
                            <div className="form-group">
                                <label> Confirm password</label>
                                <input
                                    className="form-control"
                                    name="password2"
                                    type="password"
                                    onChange={this.onChange}
                                    value={password2} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        you already have an account
                        <p> <Link to="/login">login</Link> </p>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { register, createMessage })(Register);