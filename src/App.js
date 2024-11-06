import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TestQuestion from "./components/TestQuestion.jsx";
import styles from "./styles/components/app.module.scss";
import StartQuiz from "./components/StartQuiz.jsx";
import QuizResults from "./components/QuizResults.jsx";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQuizStarted: false,
            questionNumber: 0,
            userAnswers: [],
            showResults: false,
        };
        this.startQuiz = this.startQuiz.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.previousQuestion = this.previousQuestion.bind(this);
        this.stopQuiz = this.stopQuiz.bind(this);
        this.tryAgain = this.tryAgain.bind(this);
    }

    quiz1 = {
        quizName: "HTML test",
        quizDescription: "Test your HTML knowledge",
        questions: [
            {
                questionId: 1,
                questionText: "Which tag is used for styling?",
                answers: ["h1", "style", "script", "input"],
                correctAnswer: "style",
            },
            {
                questionId: 2,
                questionText:
                    "What is the correct HTML tag for inserting a line break?",
                answers: ["br", "break", "lb", "line"],
                correctAnswer: "br",
            },
            {
                questionId: 3,
                questionText: "Which tag is used to define a hyperlink?",
                answers: ["link", "a", "href", "hyper"],
                correctAnswer: "a",
            },
            {
                questionId: 4,
                questionText:
                    "Which attribute is used to specify the URL in an anchor tag?",
                answers: ["href", "src", "link", "url"],
                correctAnswer: "href",
            },
            {
                questionId: 5,
                questionText:
                    "What is the correct HTML element for the largest heading?",
                answers: ["heading", "h6", "h1", "head"],
                correctAnswer: "h1",
            },
            {
                questionId: 6,
                questionText:
                    "Which HTML attribute specifies an alternative text for an image?",
                answers: ["src", "alt", "caption", "title"],
                correctAnswer: "alt",
            },
            {
                questionId: 7,
                questionText:
                    "Which of the following is the correct HTML for creating a checkbox?",
                answers: [
                    "<input type='checkbox'>",
                    "<checkbox>",
                    "<input checkbox='true'>",
                    "<check>",
                ],
                correctAnswer: "<input type='checkbox'>",
            },
            {
                questionId: 8,
                questionText: "How can you open a link in a new tab?",
                answers: [
                    'target="_new"',
                    'target="newtab"',
                    'target="_self"',
                    'target="_blank"',
                ],
                correctAnswer: 'target="_blank"',
            },
            {
                questionId: 9,
                questionText: "Which tag is used to define a table header?",
                answers: ["th", "tr", "td", "table"],
                correctAnswer: "th",
            },
            {
                questionId: 10,
                questionText:
                    "Which element is used to define an unordered list?",
                answers: ["ul", "ol", "li", "list"],
                correctAnswer: "ul",
            },
        ],
        time: 5,
    };

    startQuiz() {
        this.setState({
            isQuizStarted: true,
        });
    }

    stopQuiz(answers) {
        this.setState({
            isQuizStarted: false,
            userAnswers: answers,
            showResults: true,
        });
    }

    nextQuestion() {
        if (this.state.questionNumber !== this.quiz1.questions.length - 1) {
            this.setState({
                questionNumber: this.state.questionNumber + 1,
            });
        }
    }

    
    previousQuestion() {
        if (this.state.questionNumber > 0) {
            this.setState({
                questionNumber: this.state.questionNumber - 1,
            });
        }
    }
    
    tryAgain() {
        this.setState({
            isQuizStarted: false,
            questionNumber: 0,
            userAnswers: [],
            showResults: false,
        });
    }
    render() {
        return (
            <>
                <Header />
                <main className={styles.main}>
                    {this.state.isQuizStarted ? (
                        <TestQuestion
                            questionId={
                                this.quiz1.questions[this.state.questionNumber]
                                    .questionId
                            }
                            questionText={
                                this.quiz1.questions[this.state.questionNumber]
                                    .questionText
                            }
                            answers={
                                this.quiz1.questions[this.state.questionNumber]
                                    .answers
                            }
                            correctAnswer={
                                this.quiz1.questions[this.state.questionNumber]
                                    .correctAnswer
                            }
                            nextQuestion={this.nextQuestion}
                            previousQuestion={this.previousQuestion}
                            stopQuiz={this.stopQuiz}
                            count={this.quiz1.questions.length}
                            time={this.quiz1.time}
                        />
                    ) : this.state.showResults ? (
                        <QuizResults
                            name={this.quiz1.quizName}
                            result={this.state.userAnswers.length}
                            count={this.quiz1.questions.length}
                            tryAgain={this.tryAgain}
                        />
                    ) : (
                        <StartQuiz
                            name={this.quiz1.quizName}
                            description={this.quiz1.quizDescription}
                            startQuiz={this.startQuiz}
                        />
                    )}
                </main>
                <Footer />
            </>
        );
    }
}

export default App;
