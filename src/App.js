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

    const [timerDuration, setTimerDuration] = useState(299); //default to 4m 59sec (299 seconds)
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

    function secondsToDateObj(seconds){
        const time = new Date();
        time.setSeconds(time.getSeconds() + seconds); //default to 4m 59sec
        return time;
    }

    function secondsToMinutesAndSecondsString(seconds){
        const minutes = Math.floor(seconds / 60);
        const sec = seconds - minutes * 60;
        return minutes + ":" + sec;
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
                            {/*  //Need button here to modify    */}
                            <p>Timer Duration: {secondsToMinutesAndSecondsString(timerDuration)}</p>
                            <MDBBtn color='secondary' className='text-right' onClick={onDurationEditClicked}>
                                <MDBIcon far icon="edit" />
                            </MDBBtn>
                            <StickTimer expiryTimestamp={secondsToDateObj(timerDuration)}/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                    <MDBModalDialog centered>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Add New Participant</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={onDurationEditClicked}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <b>Timer Duration:</b>
                                <MDBInput type='text' value={timerDuration} onChange={handleTimeDurationChanged}></MDBInput>
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