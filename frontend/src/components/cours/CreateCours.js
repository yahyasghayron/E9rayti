import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCours } from "../../actions/courses";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import jQuery from "jquery";
import {
    Redirect
} from 'react-router-dom';

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie("csrftoken");

const editorConfiguration = {};
class CreateCours extends Component {
    static propTypes = {
        addCours: PropTypes.func.isRequired,
    };

    state = {
        title: "",
        description: "",
        submited: ''

    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        console.log("submit");

        const { title, description } = this.state;

        const cours = { title, description };
        console.log(cours);
        this.props.addCours(cours);
        this.setState({ submited: true })


    };

    render() {
        const { title, description } = this.state;

        return (
            <Fragment>
                <div className="container ">
                    <div style={{ height: 100, display: "block" }}></div>
                    <div className="shadow p-5 mt-5   bg-white rounded">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label> title </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="title"
                                    onChange={this.onChange}
                                    value={title}
                                />
                            </div>
                            <div className="form-group">
                                <label> description </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="description"
                                    onChange={this.onChange}
                                    value={description}
                                />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn-primary">
                                    create cours
                </button>


                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default connect(null, { addCours })(CreateCours);
