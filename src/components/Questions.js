import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { htmlDecode } from './Utils';

export function Questions({started, setStarted, setQuizFinished, questions, setFinalScore, wizardName }) {
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

        // When answer is clicked, 1 is added to questionCounter total
        // When the counter gets to 10 it sets quizfinished to true & fires gameOver
        if (questionCounter === questions.length) {
            setStarted(false);
            setQuizFinished(true)
            gameOver();
        } else {
            currentAnswers = [];
            // Sets a question as the current question to be displayed
            setCurrentQuestion(
                htmlDecode(questions[questionCounter].question)
            );
            // Then sets correct answer for that question in correct answer state
            // Also specifies desired encoding format for special characters
            setCorrectAnswer(
                htmlDecode(questions[questionCounter].correct_answer)
            );
            // Adds incorrect answers to the current answers array
            for (let i = 0; i < 3; i++) {
                currentAnswers.push(
                    htmlDecode(questions[questionCounter].incorrect_answers[i])
                );
            }
            //Adds correct answer to the current answers array
            currentAnswers.push(
                htmlDecode(questions[questionCounter].correct_answer)
            );
            // Sorts the completed current answers array
            setAnswers(currentAnswers.sort(() => Math.random() - 0.5));
        }
    }
    // If specified answer is the correctAnswer, add 1 to currentScore
    // Then adds one to questionCounter and then fires playQuiz function
    async function checkAnswer(i) {
        if (answers[i] === correctAnswer) {
            setCurrentScore(currentScore + 1);
        }
        setQuestionCounter((questionCounter += 1));
        playquiz();
    }

    // Calculates final score and puts it in finalScore state
    // Sends final score to api which returns if it's a user high score
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
            // .then(response => response.json())
            // .then(result => {
            //     if (result.newHighScore == true) {
            //         setHighScore("true")
            //     } else {
            //         setHighScore("false")
            //     }
            // })
            .catch(error => console.log('error', error));
    }

    return (
        <>
        
        <div className="question-container">
            <div className="top-question q-btn">
                {currentQuestion}
            </div>
            
            {correctAnswer != null ? (
                <ButtonGroup
                    className="button-group"
                    orientation="vertical"
                    aria-label="button group"
                    variant="text"
                >
                    <Button onClick={() => checkAnswer(0)} className="q-btn top">{answers[0]}</Button>
                    <Button onClick={() => checkAnswer(1)} className="q-btn">{answers[1]}</Button>
                    <Button onClick={() => checkAnswer(2)} className="q-btn">{answers[2]}</Button>
                    <Button onClick={() => checkAnswer(3)} className="q-btn">{answers[3]}</Button>
                </ButtonGroup>
            ) : null}
        </div>
        </>
    )
}