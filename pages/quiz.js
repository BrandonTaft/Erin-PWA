import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const ScaredWizard = dynamic(() =>
import('../src/components/Wizards').then((mod) => mod.ScaredWizard)
);
const HighScoreWizard = dynamic(() =>
import('../src/components/Wizards').then((mod) => mod.HighScoreWizard)
);
const UnImpressedWizard = dynamic(() =>
import('../src/components/Wizards').then((mod) => mod.UnImpressedWizard)
);
const AnswerButtons = dynamic(() =>
import('../src/components/AnswerButtons').then((mod) => mod.AnswerButtons)
);

// const { ScaredWizard } = dynamic(() => import('../src/components/Wizards'));
// const { HighScoreWizard } = dynamic(() => import('../src/components/Wizards'));
// const { UnImpressedWizard } = dynamic(() => import('../src/components/Wizards'));
// const { AnswerButtons } = dynamic(() => import('../src/components/AnswerButtons'));

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
      <ScaredWizard />
        {quizFinished != true ? (
          // Display start button when first rendered
          <div className="question-container" id="question-container">
            <div id="question" className="question"> {currentQuestion}</div>
            {questions.length > 0 && correctAnswer == null ? (
              // Keeps start button from rendering until questions are loaded to prevent undefined error
              <button className="btn quiz-btn" onClick={() => playquiz()}><span className="done-score">Start Quiz</span></button>
             ) : null}
            {correctAnswer != null ? (
              // Renders answer buttons
              <AnswerButtons answers={answers}/>
            ) : null}
          </div>
        ) : (
          // Displays once quizFinished is set to to true
          <div className="done-container">
            <div className="done">
              <h1 >Congratulations</h1>
              <h2>Your score is <span className="done-score">{finalScore}</span></h2>
              <Link href='/leaderboard'>
                <a><span className="final-btn">LEADERBOARD</span></a>
              </Link>
            </div>

          </div>
        )}
        {highScore === "true" ?
          <HighScoreWizard />
          :
          (highScore === "false" ?
            <UnImpressedWizard />
            : null
          )}
      </div>
    </div>
  );
}

export default StartQuiz;