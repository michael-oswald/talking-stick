import React from 'react';
import { useTimer } from 'react-timer-hook';

function StickTimer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        start,
        pause,
        resume,
        reset,
    } = useTimer({ autoStart:false, expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (

        <div style={{textAlign: 'center'}}>

            <div style={{fontSize: '100px'}}>
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default StickTimer;