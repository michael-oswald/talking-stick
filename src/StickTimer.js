import React, {useState} from 'react';
import { useTimer } from 'react-timer-hook';
import {
    MDBBtn,
    MDBIcon,
    MDBModal, MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader
} from "mdb-react-ui-kit";

function StickTimer({ expiryTimestamp, defaultMinute }) {
    const [basicModal, setBasicModal] = useState(false);

    function toggleShow() {
        setBasicModal(!basicModal);
    }

    const {
        seconds,
        minutes,
        start,
        pause,
        restart,
    } = useTimer({ autoStart:false, expiryTimestamp, onExpire: () => toggleShow() });


    return (
<>
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
                // Restarts to defaultMinute prop passed in
                const time = new Date();
                time.setSeconds(time.getSeconds() + (defaultMinute * 60));
                restart(time);
            }}><MDBIcon fas icon="redo" /></MDBBtn>
        </div>
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody><MDBIcon color='danger' fas icon="flag" /> {defaultMinute} minute timer has expired! <br />
                🥢 Consider switching the talking stick holder.
                </MDBModalBody>

                <MDBModalFooter>
                    <MDBBtn color='secondary' onClick={toggleShow}>
                        Close
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
        </>
    );
}

export default StickTimer;