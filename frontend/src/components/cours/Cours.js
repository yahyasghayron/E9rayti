import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import { getCours } from '../../actions/courses';
import { getChapters } from '../../actions/chapters';
import ReactHtmlParser from 'react-html-parser';
import { withRouter } from "react-router";
import Chapters from './Chapters';

class Cours extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,

        getChapters: PropTypes.func.isRequired,
        getCours: PropTypes.func.isRequired,

    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getCours(id)
        this.props.getChapters(id)


    }


    render() {
        return (
            <Fragment>




                <div className='container' >

                    {this.props.courses.map(cours => (
                        <div key={cours.id}>

                            <div className=" mt-5 jumbotron shadow" style={{
                                background: " linear-gradient(to left bottom,#3CB371,#2E8B57 50%)",
                            }} >

                                <h1 className="display-3  text-white">{cours.title}</h1>

                                <p className="lead text-light">{cours.description}</p>



                            </div>
                            <div style={{ height: '60px', desplay: 'block' }}></div>
                            <div className="card ">
                                <div className="card-header text-white" style={{
                                    background: " #3CB371",
                                }} ><h4>Chapters :</h4></div>
                                <div className="card-body py-5 ml-3">

                                    <Chapters chapters={this.props.chapters} /></div>
                            </div>


                        </div>
                    ))}

                </div>
                <div style={{ height: '300px', desplay: 'block' }}></div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    courses: state.courses.courses,
    chapters: state.chapters.chapters,


});

export default withRouter(connect(mapStateToProps, { getCours, getChapters })(Cours));