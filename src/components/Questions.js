import { useState, useEffect } from "react";
import { htmlDecode } from './Utils';

export function Questions({ started, setStarted, setQuizFinished, questions, setFinalScore, wizardName }) {
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    let [questionCounter, setQuestionCounter] = useState(0);
    let currentAnswers = [];

    useEffect(() => {
        if (started) playquiz()
    }, [started])

    async function playquiz() {
        if (questionCounter === questions.length) {
            setStarted(false);
            setQuizFinished(true)
            gameOver();
        } else {
            currentAnswers = [];
            setCurrentQuestion(
                htmlDecode(questions[questionCounter].question)
            );
            setCorrectAnswer(
                htmlDecode(questions[questionCounter].correct_answer)
            );
            for (let i = 0; i < 3; i++) {
                currentAnswers.push(
                    htmlDecode(questions[questionCounter].incorrect_answers[i])
                );
            }
            currentAnswers.push(
                htmlDecode(questions[questionCounter].correct_answer)
            );
            setAnswers(currentAnswers.sort(() => Math.random() - 0.5));
        }
    }
   
    async function checkAnswer(i) {
        if (answers[i] === correctAnswer) {
            setCurrentScore(currentScore + 1);
        }
        setQuestionCounter((questionCounter += 1));
        playquiz();
    }

    function gameOver() {
        setFinalScore(currentScore * 107)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({ "username": wizardName, "score": currentScore * 107 }),
            redirect: 'follow'
        };
        fetch("https://polar-dawn-36653.herokuapp.com/api/submit", requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div className="question-container">
                <div className="question">
                    {currentQuestion}
                </div>

                {correctAnswer != null ? (
                    <div className="div-group">
                        <div onClick={() => checkAnswer(0)} className="q-btn">{answers[0]}</div>
                        <div onClick={() => checkAnswer(1)} className="q-btn">{answers[1]}</div>
                        <div onClick={() => checkAnswer(2)} className="q-btn">{answers[2]}</div>
                        <div onClick={() => checkAnswer(3)} className="q-btn">{answers[3]}</div>
                    </div>
                ) : null}
            </div>
        </>
    )
}