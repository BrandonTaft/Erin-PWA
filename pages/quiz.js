import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useRouter } from 'next/router';

function StartQuiz() {
  const router = useRouter()
  const { cat } = router.query
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [highScore, setHighScore] = useState("");
  const [wizardName, setWizardName] = useState("");
  let [questionCounter, setQuestionCounter] = useState(0);
  let currentAnswers = [];

  // Get questions on first render
  useEffect(() => {
    getQuestions(cat);
  }, []);

  function getQuestions(cat) {
    // Gets user name from local storage and puts in wizardName state
    // Retrieves questions from api and puts them in the questions state
    setWizardName(localStorage.getItem('name'))
    fetch(`https://polar-dawn-36653.herokuapp.com/quiz/${cat}`)
      .then(response => response.json())
      .then(result => {
        setQuestions([...result]);
      })
      .catch(error => console.log("error", error));
  }

  async function playquiz() {
    // Fired from on click and removes the wizard image from page
    document.getElementById('wizard').classList.add('remove')
    document.getElementById('question').classList.add('minimum')
    // When answer is clicked, 1 is added to questionCounter total
    // When the counter gets to 10 it sets quizfinished to true & fires gameOver
    if (questionCounter === 10) {
      setQuizFinished(true);
      gameOver();
    } else {
      currentAnswers = [];
      // Sets a question as the current question to be displayed
      setCurrentQuestion(
        questions[questionCounter].question
          .replace(/(&quot;)/g, '"')
          .replace(/(&amp;)/g, "&")
          .replace(/(&shy;)/g, "-")
          .replace(/(&#039;)/g, "'")
          .replace(/(&oacute;)/g, "ó")
          .replace(/(&rsquo;)/g, "’")
          .replace(/(&ldquo;)/g, "“")
          .replace(/(&hellip;)/g, "...")
          .replace(/(&rdquo;)/g, '"')
      );
      // Then sets correct answer for that question in correct answer state
      // Also specifies desired encoding format for special characters
      setCorrectAnswer(
        questions[questionCounter].correct_answer
          .replace(/(&quot;)/g, '"')
          .replace(/(&amp;)/g, "&")
          .replace(/(&shy;)/g, "-")
          .replace(/(&#039;)/g, "'")
          .replace(/(&oacute;)/g, "ó")
          .replace(/(&rsquo;)/g, "’")
          .replace(/(&ldquo;)/g, "“")
          .replace(/(&hellip;)/g, "...")
          .replace(/(&rdquo;)/g, '"')
      );
      // Adds incorrect answers to the current answers array
      for (let i = 0; i < 3; i++) {
        currentAnswers.push(
          questions[questionCounter].incorrect_answers[i]
            .replace(/(&quot;)/g, '"')
            .replace(/(&amp;)/g, "&")
            .replace(/(&shy;)/g, "-")
            .replace(/(&#039;)/g, "'")
            .replace(/(&oacute;)/g, "ó")
            .replace(/(&rsquo;)/g, "’")
            .replace(/(&ldquo;)/g, "“")
            .replace(/(&hellip;)/g, "...")
            .replace(/(&rdquo;)/g, '"')
        );
      }
      //Adds correct answer to the current answers array
      currentAnswers.push(
        questions[questionCounter].correct_answer
          .replace(/(&quot;)/g, '"')
          .replace(/(&shy;)/g, "-")
          .replace(/(&#039;)/g, "'")
          .replace(/(&oacute;)/g, "ó")
          .replace(/(&rsquo;)/g, "’")
          .replace(/(&ldquo;)/g, "“")
          .replace(/(&rdquo;)/g, '"')
          .replace(/(&hellip;)/g, "...")
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
      .then(response => response.json())
      .then(result => {
        if (result.newHighScore == true) {
          setHighScore("true")
        } else {
          setHighScore("false")
        }
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        {quizFinished != true ? (
          // Display start button when first rendered
          <div className="question-container" id="question-container">
            <div id="question" className="question"> {currentQuestion}</div>
            {questions.length > 0 && correctAnswer == null ? (
              // Keeps start button from rendering until questions are loaded to prevent undefined error
              <button className="btn quiz-btn" onClick={() => playquiz()}><span>Start Quiz</span></button>
            ) : null}
            {correctAnswer != null ? (
              // Renders answer buttons
              <ButtonGroup
                className="button-group"
                orientation="vertical"
                aria-label="button group"
                variant="text"
              >
                <Button onClick={() => checkAnswer(0)} className="q-btn">{answers[0]}</Button>
                <Button onClick={() => checkAnswer(1)} className="q-btn">{answers[1]}</Button>
                <Button onClick={() => checkAnswer(2)} className="q-btn">{answers[2]}</Button>
                <Button onClick={() => checkAnswer(3)} className="q-btn">{answers[3]}</Button>
              </ButtonGroup>
            ) : null}
          </div>
        ) : (
          // Displays once quizFinished is set to true
          <div>
            <div className="done">
              <h1 >Congratulations</h1>
              <h2>Your score is <span className="done-score">{finalScore}</span></h2>
              <Link href='/leaderboard'>
                <a><span className="final-btn">Leaderboard</span></a>
              </Link>
            </div>

          </div>
        )}
        {highScore === "true" ?
          <div id="wizard" className="fill finish">
            <div className="bubble bubble-bottom">
              <p>That's a New High Score!</p>
            </div>
            <Image src="/images/mean-wiz.png" alt="wizard" objectFit="scale-down" layout="fill" priority={true} />
          </div>
          :
          (highScore === "false" ?
            <div id="wizard" className="fill finish">
              <div className="bubble bubble-bottom">
                <p>You Can Do Better :&#40;</p>
              </div>
              <Image src="/images/mean-wiz.png" alt="wizard" objectFit="scale-down" layout="fill" priority={true} />
            </div>
            : null
          )}
        <div id="wizard" className="fill">
          <div className="bubble bubble-bottom">
            <p>Lol, You look scared!!!</p>
          </div>
          <Image src="/images/mean-wiz.png" alt="wizard" objectFit="scale-down" layout="fill" priority={true} />
        </div>
      </div>
    </div>
  );
}

export default StartQuiz;