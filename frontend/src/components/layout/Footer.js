import React, { Component, Fragment } from 'react'

const footer = {

    position: 'static',

    bottom: '0',
    width: '100%',



}

class Footer extends Component {

    render() {
        return (
            <Fragment>
                <div className="container-fluid bg-primary mt-5 p-4 " style={footer} >
                    <div className="container" width="100%">
                        <div className="row">
                            <div className="col-sm-6 col-3 text-secondary ">
                                <img height="80" src="/static/frontend/e-9rayti8foot-02.png" />
                                <div className="m-3"><h5>about us</h5>
                                    <p>this is an education platform that provides cours and discussion in defrent subject to help ease education and the learning process </p></div>

                            </div>
                            <div className="col-1"></div>
                            <div className="col-md-3 col-sm-6  text-secondary">
                                <ul>
                                    <li>about us </li>
                                    <li>home </li>
                                    <li>posts</li>
                                    <li>courses</li>
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-md-4 col-sm-8  text-secondary">


                                <p className="">© 2020-2020 <b>E-9rayti</b>, Inc. ·</p>

                            </div>
                        </div>
                    </div>


                </div>

            </Fragment>
        )
    }
}
export default Footer;