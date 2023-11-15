import { useState, useEffect, useRef } from "react";
import { Timer } from "./Timer";
import { htmlDecode } from './Utils';

export function Questions({
    wizardName,
    started,
    setStarted,
    quizFinished,
    setQuizFinished,
    questions,
    finalScore,
    setFinalScore
}) {
    const scoreRef = useRef(0);
    const counterRef = useRef(0);
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [answers, setAnswers] = useState([]);
    let currentAnswers = [];

    useEffect(() => {
        if (started) {
            playquiz()
        }
    }, [started])

    async function playquiz() {
        if (counterRef.current === questions.length) {
            setFinalScore(scoreRef.current)
            setQuizFinished(true)
        } else {
            currentAnswers = [];
            setCurrentQuestion(
                htmlDecode(questions[counterRef.current].question)
            );
            setCorrectAnswer(
                htmlDecode(questions[counterRef.current].correct_answer)
            );
            for (let i = 0; i < 3; i++) {
                currentAnswers.push(
                    htmlDecode(questions[counterRef.current].incorrect_answers[i])
                );
            }
            currentAnswers.push(
                htmlDecode(questions[counterRef.current].correct_answer)
            );
            setAnswers(currentAnswers.sort(() => Math.random() - 0.5));
        }
    }

    async function checkAnswer(i) {
        if (answers[i] === correctAnswer) {
            scoreRef.current = scoreRef.current + 1
        }
        counterRef.current = counterRef.current += 1;
        playquiz();
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
                <Timer
                    started={started}
                    setStarted={setStarted}
                    quizFinished={quizFinished}
                    wizardName={wizardName}
                    finalScore={finalScore}
                    setFinalScore={setFinalScore}
                />
            </div>
        </>
    )
}