

import React,{useState, useEffect} from 'react';



const Timer = ({bidEndDate}) => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    

    const deadline = bidEndDate;
    const getTime = () => {
        const time = Date.parse(bidEndDate) - Date.now();

        if (time < 0) {
            // Deadline is in the past, display zeros
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        } else {
            // Deadline is in the future, calculate remaining time
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / (1000 * 60)) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }    
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return() => clearInterval(interval)
    }, [bidEndDate])



    return (
        <div className='timer'>
            <p> {days < 10 ? "0" + days : days} : {hours < 10 ? "0" + hours : hours} : {minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}</p>
        </div>
    )
}


export default Timer;