import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getquestion } from '../../actions/quiz';
import { withRouter } from "react-router";


class Question extends Component {
    state = {
        questions: [this.props.question],
        answers: "",
        show: true,
    }
    static propTypes = {
        match: PropTypes.object.isRequired,

        question: PropTypes.array.isRequired,
        getquestion: PropTypes.func.isRequired,

    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getquestion(id);






    }
    getquestions() {
        this.props.question.forEach(qst => (this.setState({ question: [...this.state.questions, qst] })))
    }

    render() {


        return (

            < div >
                {this.state.show ?
                    <div className="card m-3 p-3">

                        <h4>{this.props.Questions.content}</h4>

                        <div className="h1" >{this.props.Questions.responses.map(answ => (

                            <div
                                key={answ.id}
                                className="btn btn-outline-info mr-3  "

                                onClick={() => {

                                    this.setState({ answers: [...this.state.answers, [answ.text, answ.is_correct]], show: false })
                                    this.props.handler([answ.text, answ.is_correct])

                                }}

                            >
                                {answ.text}
                            </div>

                        ))}</div>
                    </div> : <div className="card m-3 p-3">

                        <h4>{this.props.Questions.content}</h4>

                        <div className="h1" >{this.props.Questions.responses.map(answ => (

                            <div
                                key={answ.id}
                                className="btn btn-outline-secondary mr-3  "

                                onClick={() => {


                                    console.log(this.state.answers)

                                }}

                            >
                                {answ.text}
                            </div>

                        ))}</div>
                    </div>}

            </div >
        )
    }
}

const mapStateToProps = state => ({
    question: state.quiz.question,

});
export default withRouter(connect(mapStateToProps, { getquestion })(Question));