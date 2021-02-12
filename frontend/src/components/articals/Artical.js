import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getArtical, deleteArtical } from '../../actions/articals';
import { getComments } from '../../actions/comments';
import ReactHtmlParser from 'react-html-parser';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import Comments from './Comments.js'

class Artical extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,


        getComments: PropTypes.func.isRequired,
        getArtical: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getComments(id);
        this.props.getArtical(id);


    }
    ondel() {

    }


    render() {
        return (
            <Fragment>




                <div className='container'><div className=" card p-3 m-5  border-success mb-3">



                    {this.props.articals.map(artical => (
                        <div className='container ' key={artical.id}>
                            <div>

                                <div className="media  pt-3">
                                    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">

                                        <span className="h5 m-0"> <div className="text-info">@{artical.author}</div> </span>
                                    </div>
                                </div>

                            </div >
                            <div className="text-break border-bottom border-gray">

                                {ReactHtmlParser(artical.content)}
                            </div>
                            <div className="d-flex flex-row-reverse  align-items-right m-2 ">
                                <div className='btn btn-danger ' onClick={this.props.deleteArtical.bind(this, artical.id)}> <a href="http://localhost:8000/#/posts">delete </a> </div>
                                <div> <Link to={`/post/update/${artical.id}`}> <div className="btn btn-dark mr-2" > update</div></Link></div>

                            </div>
                            <hr />

                            <span className="muted"> comments </span>


                            {/* <Comments comments={this.props.comments} /> */}

                            <Comments />

                        </div>

                    ))}








                </div>  <div style={{ height: '200px', desplay: 'block' }}></div> </div>



            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    articals: state.articals.articals,
    comments: state.comments.comments,

});

export default withRouter(connect(mapStateToProps, { getArtical, getComments, deleteArtical })(Artical));