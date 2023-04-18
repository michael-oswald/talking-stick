import React from 'react';
import { useTimer } from 'react-timer-hook';
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";

function StickTimer({ expiryTimestamp, defaultMinute }) {
    const {
        seconds,
        minutes,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ autoStart:false, expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (

        <div style={{textAlign: 'center'}}>

            <div style={{fontSize: '100px'}}>
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <MDBBtn color='success' className='text-right' onClick={start}>
                <MDBIcon fas icon="play" />
            </MDBBtn>&nbsp;
            <MDBBtn color='warning' className='text-right' onClick={pause}>
                <MDBIcon fas icon="pause" />
            </MDBBtn>&nbsp;
            <MDBBtn onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();

                time.setSeconds(time.getSeconds() + (defaultMinute * 60));
                console.log("dude stick timer", time);
                console.log("dude stick timer defaultMinute",defaultMinute );
                restart(time);
            }}><MDBIcon fas icon="redo" /></MDBBtn>
        </div>
    );
}

export default StickTimer;