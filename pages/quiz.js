import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import erin from '../public/images/quiz-erin.png';
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
     
      <div id="wizard" className="quiz-fill">

      <Image src={logo} alt="Logo" />
        
      </div>
        {quizFinished != true ? (
          <Questions setQuizFinished={setQuizFinished} questions={questions} setFinalScore={setFinalScore} wizardName={wizardName} setHighScore={setHighScore}/>
        ) : (
          // Displays once quizFinished is set to to true
         <Finished finalScore={finalScore} />
        )}
        {highScore === "true" ?
         <div id="wizard" className="quiz-fill end finish">
         <div className="bubble">
           <p>That's a New High Score!</p>
         </div>
         <Image src={erin} alt="Logo" />
       </div>
          :
          (highScore === "false" ?
          <div id="wizard" className="quiz-fill end finish">
          <div className="bubble">
            <p>You Can Do Better</p>
          </div>
          <Image src="/images/erin.png" alt="wizard" objectFit="scale-down" layout="fill" priority={true} />
        </div>
            : null
          )}
    
    </div>
  );
}

export default StartQuiz;