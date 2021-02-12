import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { getCourses } from '../../actions/courses'
import ReactHtmlParser from 'react-html-parser';


class CoursList extends Component {
    static propTypes = {
        courses: PropTypes.array.isRequired,
        getCourses: PropTypes.func.isRequired

    }

    componentDidMount() {
        this.props.getCourses();
    }

    render() {
        return (
            <Fragment>
                <h1>cours</h1>
                <div className="row">
                    {this.props.courses.map(cours => (
                        <div key={cours.id} className='col-sm-12 col-lg-5 col '>
                            <div className='card  '>
                                <div className="card-header">
                                    <Link to={`/cours/${cours.id}`} >
                                        <h5 className="card-title">{cours.title}</h5>
                                    </Link>
                                </div>

                                <div className='card-body'>
                                    {cours.description}
                                </div>
                            </div>
                        </div>

                    ))}

                </div>

                <div style={{ height: '600px', desplay: 'block' }}></div>

            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    courses: state.courses.courses

});

const style1 = {


};

export default connect(mapStateToProps, { getCourses })(CoursList);