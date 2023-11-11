import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';
import logo from '../public/images/logo.svg';
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
  const [wizardName, setWizardName] = useState("");


  useEffect(() => {
    getQuestions(cat);
  }, []);

  function getQuestions(cat) {
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
        <Questions 
          started={started}
          setStarted={setStarted}
          questions={questions}
          setQuizFinished={setQuizFinished}
          setFinalScore={setFinalScore} wizardName={wizardName}
        />
      }
      
      {quizFinished &&
        <Finished finalScore={finalScore} />
      }

    </div>
  );
}

export default StartQuiz;