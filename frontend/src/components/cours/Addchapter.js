import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addChapter } from "../../actions/chapters";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import jQuery from "jquery";

import { withRouter } from "react-router";


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



class AddChapter extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        addChapter: PropTypes.func.isRequired,
    };

    state = {
        cours: "",
        title: "",
        content: "",
        order: 1

    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ cours: id })
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        console.log("submit");

        const { title, content, cours, order } = this.state;


        const chapter = { title, content, cours, order };
        console.log(chapter);
        this.props.addChapter(chapter);

        this.setState({ order: order + 1 })
        console.log(chapter);




    };





    render() {
        const { title } = this.state;
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

                            <div className="form-group" style={{ Height: 700 }}>
                                <label> content </label>

                                <CKEditor
                                    editor={ClassicEditor}
                                    data=""
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
            </Fragment>
        )
    }
}
export default withRouter(connect(null, { addChapter })(AddChapter));