import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';
import logo from '../public/images/logo.svg';
import dynamic from 'next/dynamic';
import { Questions } from "../src/components/Questions";

const Finished = dynamic(() =>
  import('../src/components/Finished').then((mod) => mod.Finished)
);

function Quiz() {
  const questions = useRef([]);
  const router = useRouter();
  const { cat } = router.query;
  const [wizardName, setWizardName] = useState("");
  const [started, setStarted] = useState(false);
  // const [questions, setQuestions] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    getQuestions(cat);
  }, []);

  function getQuestions(cat) {
    console.log("TEST")
    setWizardName(localStorage.getItem('name'))
    fetch(`https://polar-dawn-36653.herokuapp.com/quiz/${cat}`)
      .then(response => response.json())
      .then(result => {
        // setQuestions([...result]);
       questions.current = [...result]
      })
      .catch(error => console.log("error", error));
  }

  return (
    <div className="quiz-page">
      {!started && !quizFinished &&
        <div className="middle-quiz">
          <div className="quiz-img">
            <Image src={logo} alt="are you smarter than erin logo" />
          </div>
          {/* {questions.current.length > 0 ? (
            <button className="quiz-start-btn" onClick={() => setStarted(true)}>START QUIZ</button>
          ) : <button className="quiz-start-btn">START UIZ</button>} */}
          <button className="quiz-start-btn" onClick={() => setStarted(true)}>START QUIZ</button>
        </div>
      }

      {started &&
        <div className="question-section">
          <Questions
            wizardName={wizardName}
            started={started}
            setStarted={setStarted}
            questions={questions.current}
            quizFinished={quizFinished}
            setQuizFinished={setQuizFinished}
            finalScore={finalScore}
            setFinalScore={setFinalScore}
          />
        </div>
      }

      {quizFinished &&
        <Finished
          finalScore={finalScore}
          wizardName={wizardName}
        />
      }
    </div>
  );
}

export default Quiz;