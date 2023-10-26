import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
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
    fetch(`http://127.0.0.1:8080/quiz/${cat}`)
      .then(response => response.json())
      .then(result => {
        setQuestions([...result]);
      })
      .catch(error => console.log("error", error));
  }

  return (
    <div className="quiz-page">
      <div className="quiz-container">
      <div className="bubble" id="temporary">
          READY
        </div>
      <div id="wizard" className="quiz-fill">

        <Image className="erin" src="/images/erin.png" alt="wizard" objectFit="scale-down" layout="fill" priority={true} />
        
      </div>
      <div id="wizard" className="quiz-fill">

        
        <Image className="circle" src="/icons/logo-icon.png" alt="wizard" objectFit="scale-down" layout="fill" priority={true} />
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
         <Image src="/images/erin.png" alt="wizard" objectFit="scale-down" layout="fill" priority={true} />
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
    </div>
  );
}

export default StartQuiz;