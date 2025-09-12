import {useEffect, useState} from "react";


export default function Timer(){
    const [input, setInput]=useState("");
    const [secondsLeft, setSecondsLeft]= useState(0);
    const [isRunning, setIsRunning]=useState(false);

    const start = () => {
        const n=Number.parseInt(input, 10);
        if (Number.isNaN(n) ||  n<=0) return;
        setSecondsLeft(n);
        setIsRunning(true);
        };
    useEffect(()=> {
        if (!isRunning) return;
        if (secondsLeft<=0){
            setIsRunning(false);
            alert("Time's up!");
            return
            }
        const id = setTimeout(()=> {
            setSecondsLeft((s)=> s-1);
            }, 1000);
        return ()=> clearTimeout(id);

        }, [isRunning, secondsLeft]);
    const disabledStart =
    isRunning || !/^\d+$/.test(input) || parseInt(input || "0", 10) <= 0;

    return(
        <div className="timer-container">
            <label className="timer-label">
              <span>Введите секунды:</span>
              <input
              type="number"
              min="1"
              step="1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isRunning}
              className="timer-input"
              placeholder="For Example: 10"
              />
            </label>
              <button
                onClick={start}
                disabled={disabledStart}
                className="timer-button"
              >
              Start
              </button>
            <div className="timer-value">{secondsLeft}</div>
        </div>
        );
}