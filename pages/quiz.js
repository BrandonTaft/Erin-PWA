import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import { Timer } from "../src/components/Timer";
import Image from 'next/legacy/image';
import logo from '../public/images/logo.svg';
import dynamic from 'next/dynamic';
import { Questions } from "../src/components/Questions";

const Finished = dynamic(() =>
  import('../src/components/Finished').then((mod) => mod.Finished)
);


function StartQuiz() {
  const router = useRouter()
  const { cat } = router.query
  // const timerRef = useRef(0)
  const [started, setStarted] = useState(false);
  // const [time, setTime] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [wizardName, setWizardName] = useState("");


  useEffect(() => {
    getQuestions(cat);
  }, []);

 
  useEffect(() => {
    if (quizFinished) {
     
      fetch("https://polar-dawn-36653.herokuapp.com/api/submit", {
        method: 'POST',
        origin: '*',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "username": wizardName, "score": finalScore * 166 })
      })
        .then(response => response.json())
        .catch(error => console.log('error', error));
    }
  }, [quizFinished])

  function getQuestions(cat) {
    setWizardName(localStorage.getItem('name'))
    fetch(`https://polar-dawn-36653.herokuapp.com/quiz/${cat}`)
      .then(response => response.json())
      .then(result => {
        setQuestions([...result]);
      })
      .catch(error => console.log("error", error));
  }

  // const trackTime = () => {
  //   let intervalId
  //       if (started) {
  //           intervalId = setInterval(() => setTime(time + 1), 10);
  //       }
        
       
  //       return () => clearInterval(intervalId);
  // }

  return (
    <div className="quiz-page">
      {!started && !quizFinished &&
        <div className="middle-quiz">
          <div className="quiz-img">
            <Image src={logo} alt="are you smarter than erin logo" />
          </div>
          {questions.length > 0 ? (
            <button className="quiz-start-btn" onClick={() => setStarted(true)}>START QUIZ</button>
          ) : <button className="quiz-start-btn">START QUIZ</button>}
        </div>
      }

      {started &&
        <div className="question-section">
          <Questions
            started={started}
            setStarted={setStarted}
            questions={questions}
            setQuizFinished={setQuizFinished}
            setFinalScore={setFinalScore}
          />
         {/* <Timer track={trackTime} setTime={setTime} time={time} started={started}quizFinished={quizFinished} wizardName={wizardName} finalScore={finalScore} /> */}
        </div>
      }

      {quizFinished &&
        <Finished
          finalScore={finalScore * 166}
          wizardName={wizardName}
        />
      }
    </div>
  );
}

export default StartQuiz;