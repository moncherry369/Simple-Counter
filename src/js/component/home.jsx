import React, {useState, useEffect} from "react";
import { SecondsCounter } from "./Counter.jsx";


//Component -- Timer 
const Home = () => {
	const [counter, setCounter] = useState(0);
    const [counterStr, setCounterStr] = useState(counter.toString().padStart(6, "0"));
    const [countDown, setCountDown] = useState(0);
    const [alertTarget, setAlertTarget] = useState(0);
    const [timer, setTimer] = useState(1000);
const handleTimer = () => {
    setTimer = 100000;
 };
 const resumeTimer = () => {
    setTimer = 1000;
 };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!countDown) {
                setCounter((prevCounter) => prevCounter + 1);
                setCounterStr(counter.toString().padStart(6, "0"));
            }//CountDown does not work in negatives... Try to limit to no negatives//
            else if (countDown) {
                setCountDown(countDown - 1);
                setCounter((countDown) => countDown - 1);
                setCounterStr(countDown.toString().padStart(6, "0"));
            }
            else if (alertTarget) { //I don't think this is working//
                setAlertTarget(alertTarget + 1);
                setCounter((alertTarget) => alertTarget + 1);
                
                if (counter === alertTarget) {
                    alert("Number Reached!");
                }
            }
        },1000);

    }, [counter]);

//Buttons do not work. Try figuring them out!!//

	return (
		<div className="text-center">
			<SecondsCounter counterStr = {counterStr} />
            <h5>Countdown</h5>
			<input className="input" placeholder="Enter a Number" type="number" onChange={e => setCountDown(e.target.value)} />
          
            <div className="btn-container">
                <button className="buttons"  onlclick={handleTimer}>Stop</button>
                <button className="buttons">Reset</button>
                <button className="buttons"  onclick={resumeTimer}>Resume</button>
            </div>
		</div>
	);
};




export default Home;
