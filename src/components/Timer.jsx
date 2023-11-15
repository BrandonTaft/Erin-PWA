import { useState, useEffect } from "react";

export function Timer({
    started,
    setStarted,
    quizFinished,
    wizardName,
    finalScore,
    setFinalScore
}) {

    const [time, setTime] = useState(0);

    useEffect(() => {
        let intervalId
        if (started) {
            intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [started, time]);

    useEffect(() => {
        if (quizFinished) {
            setStarted(false)
            setFinalScore(Math.round((finalScore * 166) - (time / 50)))
            fetch("https://polar-dawn-36653.herokuapp.com/api/submit", {
                method: 'POST',
                origin: '*',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "username": wizardName, "score": finalScore })
            })
                .then(response => response.json())
                .catch(error => console.log('error', error));
        }
    }, [quizFinished])

    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    return (
        <div className="stopwatch">
           <div>{minutes.toString().padStart(2, "0")}</div>
           <span>:</span>
            <div>{seconds.toString().padStart(2, "0")}</div>
            <span>:</span>
            <div className="seconds">{milliseconds.toString().padStart(2, "0")}</div>
        </div>
    )
}