import './App.css';
import {
    MDBTypography,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBInput, MDBModalFooter
} from 'mdb-react-ui-kit';
import React, {useState} from "react";
import ParticipantList from "./ParticipantList";
import StickTimer from "./StickTimer";

export default function App() {

    const [timerDuration, setTimerDuration] = useState(5); //default to 5m
    const [centredModal, setCentredModal] = useState(false);

    const onDurationEditClicked = () => {
        setCentredModal(!centredModal);
    };

    const handleSaveDurationButtonClicked = () => {
        setCentredModal(!centredModal);
    };

    const handleTimeDurationChanged = (event) => {
        const myValue = event.target.value;
        setTimerDuration(myValue);
    };

    function secondsToDateObj(minutes) {
        const time = new Date();
        time.setMinutes(time.getMinutes() + minutes);
        return time;
    }

    function minuteToString(minutes) {
        return minutes + " minutes";
    }

    return (
        <>
            <MDBContainer className="text-center">
                <MDBTypography className='display-1 pb-3 mb-3 border-bottom'>
                    🎙 Talking Stick 🥢
                </MDBTypography>
                <p>talking stick description here...</p>
                <br/>
                <br/>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol size='6'>
                            <ParticipantList/>
                        </MDBCol>
                        <MDBCol size='6'>

                            <StickTimer expiryTimestamp={secondsToDateObj(timerDuration)} defaultMinute={timerDuration}/>

                            <br />
                            <MDBBtn color='link' className='text-right' onClick={onDurationEditClicked}>
                                <MDBIcon far icon="edit"/>  Change Duration ({minuteToString(timerDuration)})
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                    <MDBModalDialog centered>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Change Default Time Duration</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={onDurationEditClicked}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <b>Timer Duration:</b>
                                <MDBInput type='text' value={timerDuration}
                                          onChange={handleTimeDurationChanged}></MDBInput>
                                <div id='textExample1' className='form-text'>
                                    You'll need to click the <MDBIcon fas icon="redo" /> blue restart timer button for
                                    the new duration to take effect. (after you save changes)
                                </div>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color='secondary' onClick={onDurationEditClicked}>
                                    Close
                                </MDBBtn>
                                <MDBBtn color='success' onClick={handleSaveDurationButtonClicked}>Save changes</MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </MDBContainer>
        </>
    );
}