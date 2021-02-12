import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuiz, getquestion } from '../../actions/quiz';
import { withRouter } from "react-router";
import Question from './Question'
class Quiz extends Component {
    constructor(props) {
        super(props)

        this.setAnswers = this.setAnswers.bind(this)
    }
    state = {
        answers: "",
        score: 0,
        showresults: false
    }

    static propTypes = {
        match: PropTypes.object.isRequired,

        quiz: PropTypes.array.isRequired,
        getQuiz: PropTypes.func.isRequired,

        question: PropTypes.array.isRequired,
        getquestion: PropTypes.func.isRequired,
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getQuiz(id);
        this.props.getquestion(id)


    }
    setAnswers(answ) {

        this.setState({ answers: [...this.state.answers, answ] })
        answ[1] ? this.setState({ score: this.state.score + 1 }) : ''

    }
    render() {

        return (


            <div className="container-sm">
                {!this.state.showresults ?
                    <div>
                        {
                            this.props.quiz.map(quiz1 => (
                                <div className="card mt-3" key={quiz1.id}>
                                    <div className="card-header ">
                                        <div className=""><h3>{quiz1.title}</h3></div>
                                        <div className="card-subtitle mb-2 text-muted">{quiz1.description}</div>
                                    </div>
                                    <div className="m-2">
                                        {
                                            this.props.question.map(qst => (
                                                <Question key={qst.id}
                                                    Questions={qst} handler={this.setAnswers} />
                                            ))}
                                    </div>

                                    <div className="btn btn-dark"
                                        onClick={
                                            () => {

                                                this.setState({ showresults: true })
                                                console.log(this.state.answers)
                                                console.log(this.state.score)
                                                console.log(this.props.question)

                                            }
                                        }>show result</div>

                                </div>


                            ))
                        }
                    </div> : <div className="card mt-3">
                        {
                            this.props.quiz.map(quiz1 => (

                                <div className="card-header " key={quiz1.id}>
                                    <div className=""><h1>{quiz1.title}</h1></div>
                                    <div className="card-subtitle mb-2 text-muted">{quiz1.description}</div>
                                </div>))}
                        <div className="m-auto"><h2 className="m-5" >votre score : 	&nbsp;	&nbsp;{this.state.score}/{this.props.question.length}</h2>
                            <div className='card m-3 p-3'>
                                <h3>correction:</h3>
                                {
                                    this.props.question.map(qst => (
                                        <div className="card m-2" key={qst.id}>
                                            <h4 className="m-3">{qst.content}:</h4>
                                            <div className="h1" >{qst.responses.map(answ => (
                                                <div>{answ.is_correct ?
                                                    <div
                                                        key={answ.id}
                                                        className="btn btn-success  m-3 "   >
                                                        <h5>{answ.text}</h5>
                                                    </div>
                                                    : ""}
                                                </div>
                                            ))}</div>
                                        </div>
                                    ))}</div>
                        </div>

                    </div>}
                <div style={{ height: '400px', desplay: 'block' }}></div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    quiz: state.quiz.quiz,
    question: state.quiz.question,

});
export default withRouter(connect(mapStateToProps, { getQuiz, getquestion })(Quiz));