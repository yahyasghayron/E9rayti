import React, { Component, Fragement, Fragment } from 'react';

import CoursList from './CoursList';


export default class DashbordCours extends Component {
    render() {
        return (
            <Fragment>
                <div className='container-lg '>

                    <div className='row'>

                        <div className='col-md-8 blog-main '><CoursList /></div>
                        <div className='col-md-4 blog-sidebar '>
                            <br /><br /><br />
                            <div className="p-4 mb-3 jumbotron  text-white rounded bg-dark ">
                                <h4 className="font-italic">About</h4>
                                <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                            </div>
                            <div className="p-4 mb-3 bg-light rounded">
                                <h4 className="font-italic">About</h4>
                                <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                            </div>

                        </div>
                    </div>


                </div>
            </Fragment >
        )
    }
}
