import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateArtical, getArtical } from "../../actions/articals";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import jQuery from "jquery";
import { withRouter } from "react-router";

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


class UpdateArtical extends Component {
    static propTypes = {
        getArtical: PropTypes.func.isRequired,
        updateArtical: PropTypes.func.isRequired,

    };

    state = {
        title: "",
        description: "",
        content: "",
        submited: false
    };
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getArtical(id);
        this.setState({
            title: this.props.articals[0].title,
            description: this.props.articals[0].description,
            content: this.props.articals[0].content,
        });

    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        console.log("submit");

        const { title, description, content } = this.state;

        const artical = { title, description, content };
        console.log(artical);
        this.props.updateArtical(artical, this.props.articals[0].id);
        this.setState({ submited: true })

    };

    render() {
        const { title, description } = this.state;
        if (this.state.submited) {
            console.log(this.state.submited);
            return < Redirect to='/posts' />
        }
        return (
            <Fragment> {this.props.articals.map(artical => (
                <div className="container " key={artical.id}>

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
                            <div className="form-group" style={{ Height: 700 }}>
                                <label> content </label>

                                <CKEditor
                                    editor={ClassicEditor}
                                    data={artical.content}
                                    onInit={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log("Editor is ready to use!", editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        this.setState({ content: editor.getData() });
                                    }}
                                    onBlur={(event, editor) => { }}
                                    onFocus={(event, editor) => {
                                        console.log("Focus.", editor);
                                    }}
                                    config={{


                                        ckfinder: {
                                            // Upload the images to the server using the CKFinder QuickUpload command.
                                            uploadUrl: "http://localhost:8000/media",
                                            options: {
                                                resourceType: "Images",
                                            },
                                            headers: {
                                                "X-CSRF-TOKEN": csrftoken,
                                            },
                                        },
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn-primary">
                                    submit
                </button>
                            </div>
                        </form>
                    </div>

                </div>
            ))}
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    articals: state.articals.articals,
})


export default withRouter(connect(mapStateToProps, { updateArtical, getArtical })(UpdateArtical));
