import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'





export default class Home extends Component {
    render() {
        return (


            <Fragment>
                <div role='main'>

                    <div >
                        <div className="container-fluid btop p-5" style={{
                            position: 'relative',

                            "zindex": '1',
                            desplay: 'block',
                            background: " linear-gradient(to left bottom,#fff,#d4eee2 50%)",


                        }} width="100%" height="700" >
                            <div className="row">

                                <div className=" col-sm-12 col-lg-5 p-5 m-5 m-auto">
                                    <div>
                                        <h1 className='desplay1'><b>Learn from home</b></h1>
                                        <h5 className='my-3'>Unlock a passion, side hustle, or new professional skill with thousands of classes in design, business, and more</h5>

                                    </div>

                                </div>

                                <div className="col-2"></div>
                                <div className=" col-sm-10 col-lg-5  m-auto">

                                    <img height="460" src="/static/frontend/logo.png" />
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="container-fluid p-5" style={{
                        background: " linear-gradient(to right bottom,#d4eee2 50%,#fff 50%)", "zindex": '1', desplay: 'block',
                    }}>
                        <div className="container marketing " >

                            <div className="row ">
                                <div className="col-lg-4">
                                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                                    <h2>Heading</h2>
                                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                                    <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                                </div>
                                <br />
                                <div className="col-lg-4">
                                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                                    <h2>Heading</h2>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                                    <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                                </div>
                                <br />
                                <div className="col-lg-4">
                                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                                    <h2>Heading</h2>
                                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                    <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                                </div>
                            </div>




                            <hr className="featurette-divider" />

                            <div className="row featurette">
                                <div className="col-md-7">
                                    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                                </div>
                                <div className="col-md-5">
                                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                                </div>
                            </div>

                            <hr className="featurette-divider" />

                            <div className="row featurette">
                                <div className="col-md-7 order-md-2">
                                    <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                                </div>
                                <div className="col-md-5 order-md-1">
                                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                                </div>
                            </div>

                            <hr className="featurette-divider" />

                            <div className="row featurette">
                                <div className="col-md-7">
                                    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                                </div>
                                <div className="col-md-5">
                                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                                </div>
                            </div>

                            <hr className="featurette-divider" />




                            <div />




                        </div>
                    </div>
                </div>
            </Fragment >

        )
    }
}
