import React, { Component, Fragment } from 'react';
import { withAlert } from "react-alert";
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types'


export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired

    };

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.title) alert.error(`title : ${error.msg.title}`);
            if (error.msg.content) alert.error(`content : ${error.msg.content}`);
            if (error.msg.password) alert.error(`AUTH: ${error.msg.password}`);
            if (error.msg.username) alert.error(`AUTH: ${error.msg.username}`);
            if (error.msg.email) alert.error(`AUTH: ${error.msg.email}`);
            if (error.msg.non_field_errors) alert.error(` ${error.msg.non_field_errors}`);

        }
        if (message !== prevProps.message) {
            if (message.passwordsNotMatch) alert.error(`AUTH: ${message.passwordsNotMatch}`);

            if (message.articalcreated) alert.success(` ${message.articalcreated}`);
        }

    }

    render() {
        return <Fragment></Fragment>;
    }
};
const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));