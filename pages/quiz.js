import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../public/images/newlogo.webp';
import dynamic from 'next/dynamic';

const Questions = dynamic(() =>
  import('../src/components/Questions'), {
  ssr: false,
});

const LeaderBoard = dynamic(() =>
  import('./leaderboard'), {
  loading: () => <p>…Loading</p>,
  ssr: false,
});

function Quiz() {
  const questions = useRef([]);
  const router = useRouter();
  const { cat } = router.query;
  const [wizardName, setWizardName] = useState("");
  const [started, setStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    getQuestions(cat)
  }, []);

  function getQuestions(cat) {
    setWizardName(localStorage.getItem('name'))
    fetch(`https://polar-dawn-36653.herokuapp.com/quiz/${cat}`)
      .then(response => response.json())
      .then(result => {
        questions.current = [...result]
      })
      .catch(error => console.log("error", error));
  };

  return (
    <div className="quiz-page">
      {!started && !quizFinished &&
        <div className="middle-quiz">
          <div className="quiz-img">
          <Image src={logo} alt="are you smarter than erin Logo"
                    style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        inset: 0,
                        color: 'transparent',
                        borderTopLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        backgroundColor:'transparent'
                    }}
                    priority={true}
                />
          </div>
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
       <LeaderBoard finalScore={finalScore} />
      }
    </div>
  );
}

export default Quiz;