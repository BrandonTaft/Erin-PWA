import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import trophy from '../public/images/trophy.png';
import logo from '../public/images/logo.png';
import dynamic from 'next/dynamic';
const Finished = dynamic(() =>
  import('../src/components/Finished').then((mod) => mod.Finished)
);
const Questions = dynamic(() =>
  import('../src/components/Questions').then((mod) => mod.Questions)
);

function StartQuiz() {
  const router = useRouter()
  const { cat } = router.query
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [highScore, setHighScore] = useState("");
  const [wizardName, setWizardName] = useState("");


  // Get questions on first render
  useEffect(() => {
    getQuestions(cat);
  }, []);

  function getQuestions(cat) {
    console.log("GOT QUESTins")
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

  return (
    <div className="quiz-page">

      {!started && !quizFinished &&
        <>
          <div className="quiz-fill">
            <Image src={logo} alt="Logo" />
          </div>
          {questions.length > 0 ? (
            <button className="quiz-start-btn" onClick={() => setStarted(true)}>START QUIZ</button>
          ) : <button className="quiz-start-btn">START QUIZ</button>}
        </>
      }
      ``
      {started &&
        <Questions 
          started={started}
          setStarted={setStarted}
          questions={questions}
          setQuizFinished={setQuizFinished}
          setFinalScore={setFinalScore} wizardName={wizardName}
          // setHighScore={setHighScore}
        />
      }
      
      {quizFinished &&
        <Finished finalScore={finalScore} />
      }

      {/* {highScore === "true" ?
        <div id="wizard" className="quiz-fill end finish">
          <Image src={trophy} alt="Logo" />
        </div>
        :
        (highScore === "false" ?
          <div id="wizard" className="quiz-fill end finish">
            <div className="high-score-text">
              <p>You Can Do Better</p>
            </div>
            <Image src="/images/trophy.png" alt="wizard" objectFit="scale-down" layout="fill" priority={true} />
          </div>
          : null
        )} */}

    </div>
  );
}

export default StartQuiz;