import { useState, useEffect } from "react";
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
const Finished = dynamic(() =>
import('../src/components/Finished').then((mod) => mod.Finished)
);
const Questions = dynamic(() =>
import('../src/components/Questions').then((mod) => mod.Questions)
);

function StartQuiz() {
  const router = useRouter()
  const { cat } = router.query
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
      <div className="quiz-container">
      <ScaredWizard />
        {quizFinished != true ? (
          <Questions setQuizFinished={setQuizFinished} questions={questions} setFinalScore={setFinalScore} wizardName={wizardName} setHighScore={setHighScore}/>
        ) : (
          // Displays once quizFinished is set to to true
         <Finished finalScore={finalScore} />
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