import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import { getCours } from '../../actions/courses';
import { getChapters } from '../../actions/chapters';
import ReactHtmlParser from 'react-html-parser';
import { withRouter } from "react-router";

import Chapters from './Chapters'


class CoursEdit extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,


        getCours: PropTypes.func.isRequired,
        getChapters: PropTypes.func.isRequired,

    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getCours(id)
        this.props.getChapters(id)
        console.log(this.props.chapters)


    }


    render() {
        return (
            <Fragment>


                {this.props.courses.map(cours => (
                    <div key={cours.id}>
                        <div>
                            {cours.title}
                        </div>
                        <hr />
                        <span className="muted"> chapters : </span>
                        <br />

                        <Chapters chapters={this.props.chapters} />

                    </div>
                ))}


            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    courses: state.courses.courses,
    chapters: state.chapters.chapters,


});

export default withRouter(connect(mapStateToProps, { getCours, getChapters })(CoursEdit));