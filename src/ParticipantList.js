
import React, {useState} from "react";
import Participant from "./Participant";
import {
    MDBBtn,
    MDBIcon, MDBInput,
    MDBModal, MDBModalBody, MDBModalContent,
    MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBTypography
} from "mdb-react-ui-kit";


function ParticipantList() {

    const [participantArray, setParticipantArray] = useState([]);

    const [centredModal, setCentredModal] = useState(false);
    const [newParticipantName, setNewParticipantName] = useState('');


    const onStickClicked = (event, participantIndex) => {
        let newArray = [...participantArray];

        if (event.target.checked === true) {
            //make all other check boxes not available to click
            for (let i = 0; i < newArray.length; i++) {
                newArray[i].isHoldingStick = false;
                newArray[i].isStickGreyedOut = true;
            }

            newArray[participantIndex].isHoldingStick = true;
            newArray[participantIndex].isStickGreyedOut = false;
        } else { //unchecked
            //means we make all the check boxes now available to click again
            for (let i = 0; i < newArray.length; i++) {
                newArray[i].isHoldingStick = false;
                newArray[i].isStickGreyedOut = false;
            }
        }
        setParticipantArray(newArray);
    };

    const onDeleteClickedParent = (index) => {
        let newArray = [...participantArray];
        newArray.splice(index, 1);
        setParticipantArray(newArray);
    };

    const newParticipantClicked = () => {
        //clear the variables
        setNewParticipantName('');
        setCentredModal(!centredModal);
    }

    const handleNewParticipantNameChange = (event) => {
        const myValue = event.target.value;
        setNewParticipantName(myValue);
    };

    function isStickBeingHeld() {
        for (let i = 0; i< participantArray.length; i++) {
            if (participantArray[i].isHoldingStick === true) {
                return true;
            }
        }
        return false;
    }

    const handleSaveParticipantBtnClicked = () => {

        let isStickHeldCurrently = isStickBeingHeld();
        let newArray = [...participantArray];
        //check if its csv format:
        if (newParticipantName.includes(",")) {
            const myArray = newParticipantName.split(",");
            //loop through array here:
            for (let i = 0; i < myArray.length; i++) {
                let nameInArray = myArray[i];
                let newParticipant = {name:nameInArray, isHoldingStick:false, isStickGreyedOut:isStickHeldCurrently};
                newArray.push(newParticipant);
            }
        } else {
            let newParticipant = {name:newParticipantName, isHoldingStick:false, isStickGreyedOut:isStickHeldCurrently};
            newArray.push(newParticipant);
        }
        setParticipantArray(newArray);
        setCentredModal(!centredModal);
    };

    return (
        <>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <td><MDBTypography tag='strong'>Holding Talking Stick?</MDBTypography></td>
                        <td><MDBTypography tag='strong'>Participant Name</MDBTypography></td>
                        <td><MDBBtn outline onClick={newParticipantClicked}>+ Add</MDBBtn></td>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {participantArray.map((participant, i) =>
                        <Participant
                              key={i}
                              participantName={participant.name}
                              idx={i}
                              isHoldingStick={participant.isHoldingStick}
                              isStickGreyedOut={participant.isStickGreyedOut}
                              onStickClicked={onStickClicked}
                              onDeleteClicked={() => onDeleteClickedParent(i)}
                        />
                    )}
                </MDBTableBody>
            </MDBTable>
            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Add New Participant</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={newParticipantClicked}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <b>Participant Name:</b>
                            <MDBInput type='text' value={newParticipantName} onChange={handleNewParticipantNameChange}></MDBInput>
                            <div id='textExample1' className='form-text'>
                                You can also add a list of participants in comma separated format <br /> Ex: John,Sue,Emily
                            </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={newParticipantClicked}>
                                Close
                            </MDBBtn>
                            <MDBBtn color='success' onClick={handleSaveParticipantBtnClicked}>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
export default ParticipantList;
