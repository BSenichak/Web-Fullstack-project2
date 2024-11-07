import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TestQuestion from "./components/TestQuestion.jsx";
import styles from "./styles/components/app.module.scss";
import StartQuiz from "./components/StartQuiz.jsx";
import QuizResults from "./components/QuizResults.jsx";
import StartPage from "./components/StartPage.jsx";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQuizStarted: false,
            questionNumber: 0,
            userAnswers: [],
            showResults: false,
            chooseQuiz: null,
        };
        this.startQuiz = this.startQuiz.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.previousQuestion = this.previousQuestion.bind(this);
        this.stopQuiz = this.stopQuiz.bind(this);
        this.tryAgain = this.tryAgain.bind(this);
        this.chooseQuiz = this.chooseQuiz.bind(this);
    }

    quizes = [
        {
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
        },
        {
            quizName: "CSS Basics",
            quizDescription: "Test your knowledge of CSS fundamentals",
            questions: [
                {
                    questionId: 1,
                    questionText:
                        "Which property is used to change text color?",
                    answers: [
                        "font-color",
                        "text-color",
                        "color",
                        "text-style",
                    ],
                    correctAnswer: "color",
                },
                {
                    questionId: 2,
                    questionText: "Which CSS property controls text size?",
                    answers: [
                        "font-size",
                        "text-size",
                        "font-weight",
                        "text-style",
                    ],
                    correctAnswer: "font-size",
                },
                {
                    questionId: 3,
                    questionText:
                        "How do you select an element with id 'header'?",
                    answers: [".header", "#header", "header", "id=header"],
                    correctAnswer: "#header",
                },
                {
                    questionId: 4,
                    questionText:
                        "Which property is used to add space inside an element?",
                    answers: ["margin", "spacing", "padding", "border"],
                    correctAnswer: "padding",
                },
                {
                    questionId: 5,
                    questionText: "Which property is used to make text bold?",
                    answers: [
                        "font-style",
                        "font-weight",
                        "text-weight",
                        "text-style",
                    ],
                    correctAnswer: "font-weight",
                },
                {
                    questionId: 6,
                    questionText:
                        "Which CSS property changes the background color?",
                    answers: [
                        "color",
                        "bg-color",
                        "background-color",
                        "back-color",
                    ],
                    correctAnswer: "background-color",
                },
                {
                    questionId: 7,
                    questionText:
                        "What is the default display value of a <div>?",
                    answers: ["inline", "block", "inline-block", "flex"],
                    correctAnswer: "block",
                },
                {
                    questionId: 8,
                    questionText: "How do you make a list with bullets?",
                    answers: ["ul", "ol", "dl", "list"],
                    correctAnswer: "ul",
                },
                {
                    questionId: 9,
                    questionText: "Which property changes the font family?",
                    answers: [
                        "font-family",
                        "font-style",
                        "font-weight",
                        "font-type",
                    ],
                    correctAnswer: "font-family",
                },
                {
                    questionId: 10,
                    questionText: "How can you center-align text in CSS?",
                    answers: [
                        "align: center",
                        "text-center",
                        "text-align: center",
                        "align-items: center",
                    ],
                    correctAnswer: "text-align: center",
                },
            ],
            time: 6,
        },
        {
            quizName: "JavaScript Basics",
            quizDescription: "Assess your knowledge of JavaScript fundamentals",
            questions: [
                {
                    questionId: 1,
                    questionText:
                        "Which keyword declares a variable in JavaScript?",
                    answers: ["var", "let", "const", "All of the above"],
                    correctAnswer: "All of the above",
                },
                {
                    questionId: 2,
                    questionText: "How do you call a function in JavaScript?",
                    answers: [
                        "function()",
                        "call function",
                        "function[]",
                        "function{}",
                    ],
                    correctAnswer: "function()",
                },
                {
                    questionId: 3,
                    questionText:
                        "Which symbol is used for comments in JavaScript?",
                    answers: ["//", "#", "<!-- -->", "/* */"],
                    correctAnswer: "//",
                },
                {
                    questionId: 4,
                    questionText: "What does 'NaN' stand for?",
                    answers: [
                        "Not a Number",
                        "Null and None",
                        "Number and Null",
                        "Number and Name",
                    ],
                    correctAnswer: "Not a Number",
                },
                {
                    questionId: 5,
                    questionText:
                        "How do you add an element to the end of an array?",
                    answers: ["push()", "pop()", "shift()", "add()"],
                    correctAnswer: "push()",
                },
                {
                    questionId: 6,
                    questionText:
                        "What is the correct way to declare a constant?",
                    answers: [
                        "const value = 5;",
                        "let value = 5;",
                        "var value = 5;",
                        "const: 5",
                    ],
                    correctAnswer: "const value = 5;",
                },
                {
                    questionId: 7,
                    questionText:
                        "Which method can be used to find the length of an array?",
                    answers: [".size", ".length", ".index", ".count"],
                    correctAnswer: ".length",
                },
                {
                    questionId: 8,
                    questionText: "Which operator is used for strict equality?",
                    answers: ["=", "==", "===", "!="],
                    correctAnswer: "===",
                },
                {
                    questionId: 9,
                    questionText:
                        "Which symbol is used for string concatenation?",
                    answers: ["+", "&", ".", "#"],
                    correctAnswer: "+",
                },
                {
                    questionId: 10,
                    questionText:
                        "How do you round a number down in JavaScript?",
                    answers: [
                        "Math.round()",
                        "Math.ceil()",
                        "Math.floor()",
                        "Math.reduce()",
                    ],
                    correctAnswer: "Math.floor()",
                },
            ],
            time: 6,
        },
    ];

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
        if (
            this.state.questionNumber !==
            this.quizes[this.state.chooseQuiz].questions.length - 1
        ) {
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

    chooseQuiz(index) {
        this.setState({
            chooseQuiz: index,
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
                    {this.state.chooseQuiz === null ? (
                        <StartPage
                            quizes={this.quizes}
                            chooseQuiz={this.chooseQuiz}
                        />
                    ) : this.state.isQuizStarted ? (
                        <TestQuestion
                            questionId={
                                this.quizes[this.state.chooseQuiz].questions[
                                    this.state.questionNumber
                                ].questionId
                            }
                            questionText={
                                this.quizes[this.state.chooseQuiz].questions[
                                    this.state.questionNumber
                                ].questionText
                            }
                            answers={
                                this.quizes[this.state.chooseQuiz].questions[
                                    this.state.questionNumber
                                ].answers
                            }
                            correctAnswer={
                                this.quizes[this.state.chooseQuiz].questions[
                                    this.state.questionNumber
                                ].correctAnswer
                            }
                            nextQuestion={this.nextQuestion}
                            previousQuestion={this.previousQuestion}
                            stopQuiz={this.stopQuiz}
                            count={
                                this.quizes[this.state.chooseQuiz].questions
                                    .length
                            }
                            time={this.quizes[this.state.chooseQuiz].time}
                        />
                    ) : this.state.showResults ? (
                        <QuizResults
                            info={this.quizes[this.state.chooseQuiz]}
                            results={this.state.userAnswers}
                            tryAgain={this.tryAgain}
                        />
                    ) : (
                        <StartQuiz
                            name={this.quizes[this.state.chooseQuiz].quizName}
                            description={
                                this.quizes[this.state.chooseQuiz]
                                    .quizDescription
                            }
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
