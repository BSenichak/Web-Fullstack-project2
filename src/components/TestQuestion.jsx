import React, { Component } from "react";
import styles from "../styles/components/question.module.scss";

export class TestQuestion extends Component {

    render() {
        return (
        <div className={`${styles.question} card`}>
            <h3 className="card-header">Question #{this.props.questionId}: {this.props.questionText}</h3>
            <ul className="card-body">
                {this.props.answers.map((answer, index) => (
                    <li key={index} className="form-check">
                        <input
                            type="radio"
                            id={`answer${index + 1}`}
                            name="answer"
                            value={answer}
                            className="form-check-input"
                        />
                        <label htmlFor={`answer${index + 1}`} className="form-check-label">{answer}</label>
                    </li>
                ))}                
            </ul>
            <button className="btn btn-primary m-2">Submit</button>
        </div>
        );
    }
}

export default TestQuestion;
