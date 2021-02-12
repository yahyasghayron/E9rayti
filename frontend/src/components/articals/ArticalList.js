import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { getArticals, getArtical } from '../../actions/articals';
import ReactHtmlParser from 'react-html-parser';


class ArticalList extends Component {
    static propTypes = {
        articals: PropTypes.array.isRequired,
        getArticals: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getArticals();
    }

    render() {
        return (
            <Fragment>
                <h1>articals</h1>


                {this.props.articals.map(artical => (




                    <div className="card  gedf-card mb-4 " key={artical.id} style={style1} >

                        <div className="card-header">



                            <div className="h5 m-0">@{artical.author}</div>




                        </div>
                        <div className="card-body">
                            <Link to={`/post/${artical.id}`} >
                                <h5 className="card-title">{artical.title}</h5>
                            </Link>
                            <p className="card-text">{artical.description} </p>

                        </div>
                        <div className="card-footer">

                            <div className="d-flex justify-content-between">

                                <div className="d-inline p-2 bg-dark text-white">created at  &nbsp; {artical.created_at}</div>
                                <div className="d-inline p-2 bg-primary text-white">vote <span className="badge badge-light badge-pill"><b>{artical.vote}</b></span></div>


                            </div>


                        </div>
                    </div>




                ))}




            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    articals: state.articals.articals
});

const style1 = {


};

export default connect(mapStateToProps, { getArticals })(ArticalList);