import React, { Component } from "react";
import styles from "../styles/components/question.module.scss";

export class TestQuestion extends Component {
    constructor(props) {
        super(props);
        this.addAnswer = this.addAnswer.bind(this);
        this.state = {
            userAnswers: [],
            time: props.time,
        };
    }
    componentDidMount() {
        console.log(`Question #${this.props.questionId} mounted`);
        this.indervalId = setInterval(() => {
            this.setState((prev) => ({...prev, time: prev.time - 1}));
        }, 1000);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.questionId !== this.props.questionId) {
            document.querySelectorAll(".form-check input").forEach((input) => {
                input.checked =
                    this.state.userAnswers[this.props.questionId - 1] ===
                    input.value;
            });
        }

        if (this.state.time <= 0) {
            this.props.stopQuiz(this.state.userAnswers);
        }
    }
    componentWillUnmount() {
        console.log(this.state.userAnswers);
        clearInterval(this.indervalId);
    }

    addAnswer(e) {
        this.setState((prev) => {
            prev.userAnswers[this.props.questionId - 1] = e.target.value;
            return prev;
        });
    }

    render() {
        return (
            <div className={`${styles.question} card`}>
                <h3 className="card-header">
                    Question #{this.props.questionId}: {this.props.questionText}
                </h3>
                <ul className="card-body">
                    <progress
                        value={this.state.userAnswers.length}
                        max={this.props.count}
                        style={{ width: "100%" }}
                    ></progress>
                    <p className="card-text">Time: {this.state.time}</p>
                    {this.props.answers.map((answer, index) => (
                        <li key={index} className="form-check">
                            <input
                                type="radio"
                                id={`answer${index + 1}`}
                                name="answer"
                                value={answer}
                                className="form-check-input"
                                onChange={this.addAnswer}
                            />
                            <label
                                htmlFor={`answer${index + 1}`}
                                className="form-check-label"
                            >
                                {answer}
                            </label>
                        </li>
                    ))}
                </ul>
                {/* <button className="btn btn-primary m-2">Submit</button> */}
                <div className={styles.buttons}>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.props.previousQuestion()}
                        disabled={this.props.questionId === 1}
                    >
                        Previous
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.props.nextQuestion()}
                        disabled={this.props.questionId === this.props.count}
                    >
                        Next
                    </button>
                </div>
                <button
                    className={"btn btn-secondary m-2 " + styles.stop}
                    onClick={() => this.props.stopQuiz(this.state.userAnswers)}
                >
                    Stop Quiz
                </button>
            </div>
        );
    }
}

export default TestQuestion;
