import { useState, useEffect} from "react";

export function Timer({ started, quizFinished, wizardName, finalScore, time, setTime }) {
    //const [time, setTime] = useState(0);
    useEffect(() => {
        let intervalId
        if (started) {
            intervalId = setInterval(() => setTime(time + 1), 10);
        }
        
        console.log(quizFinished, "fin")
        return () => clearInterval(intervalId);
    }, [started, time]);
    
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;
    return (
        <div className="stopwatch">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
        </div>
    )
}