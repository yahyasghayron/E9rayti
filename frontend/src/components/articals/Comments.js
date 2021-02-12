import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getComments } from '../../actions/comments';
import { getuser } from '../../actions/auth';
import AddComment from './AddComment';
import { withRouter } from "react-router";








class Comments extends Component {
    state = {
        authors: []

    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        getComments: PropTypes.func.isRequired,
        users: PropTypes.object.isRequired,

    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getComments(id);


    }
    filteruser = (users, authid) => {
        console.log(users.filter(user => (user.id == authid)))


    }

    // const comments_data = comments.comments;

    render() {
        if (this.props.comments !== []) {

            return (
                <Fragment>
                    <AddComment />

                    <div className='container-sm  '>  {this.props.comments.map(comment => (

                        <div className=' card border-secondary mb-3' key={comment.id} >

                            <div className="card-header">

                                <div className="text-info">@ {comment.author} </div>
                            </div>
                            <div className="card-body mx-4">
                                <div>{comment.content}</div>
                                <div className=" font-weight-light text-muted text-right mr-5">{comment.created_at}</div>
                            </div>


                        </div>

                    ))} </div>



                </Fragment>
            )
        } else {
            return null;
        }
    }
}
const mapStateToProps = state => ({
    users: state.users,
    comments: state.comments.comments,

});

export default withRouter(connect(mapStateToProps, { getComments })(Comments));