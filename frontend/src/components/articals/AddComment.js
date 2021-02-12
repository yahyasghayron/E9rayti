import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addComment } from '../../actions/comments';
import { withRouter } from "react-router";




class AddComment extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        addComment: PropTypes.func.isRequired,
    };

    state = {
        content: '',

        artical: this.props.match.params.id
    };
    componentDidMount() {
        console.log(this.props.auth.user.id)

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        const { content, artical } = this.state;
        const comment = { content, artical };
        console.log(comment);

        this.props.addComment(comment);

    };

    render() {
        const { content } = this.state;
        return (
            <Fragment>


                <div className="card border-success  m-2 mb-3 p-3 rounded">
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">

                            <input
                                className="form-control"
                                type="text"
                                name="content"
                                onChange={this.onChange}
                                value={content}
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn-success">
                                comment
                          </button>
                        </div>
                    </form>
                </div>

            </Fragment>
        );
    }
}
const mapStateToProps = getstate => ({
    auth: getstate.auth
})


export default withRouter(connect(mapStateToProps, { addComment })(AddComment));
