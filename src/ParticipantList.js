
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


function ParticipantList({preLoadParticipantArray}) {

    const [participantArray, setParticipantArray] = useState([]);

    const [centredModal, setCentredModal] = useState(false);
    const [newParticipantName, setNewParticipantName] = useState('');

    // maybe make some dummy ones here first???

    //copy the participantArray into a new array
    //let rows = [];
    /*if (preLoadParticipantArray) { //if participants were passed in...
        rows = [... participantArray];
        //maybe just 1. loop through the preLoadParticipantArray and 2. add them to an array, then 3. setParticipantArray state
        for (let i = 0; i < preLoadParticipantArray.length; i++) {
            let name = preLoadParticipantArray[i];
            let newParticipant = {name:name, isHoldingStick:false};
            rows.push(newParticipant);
        }
        //add to state here, but I think this feature is for later....
    }*/

    const onStickClicked = (event, participantIndex) => {
        console.log("onStickClicked event", event);
        console.log("onStickClicked checked?", event.target.checked);
        let newArray = [...participantArray];
        console.log("newArray onStickClicked", newArray)

        if (event.target.checked === true) {
            newArray[participantIndex].isHoldingStick = true;
        } else { //unchecked
            newArray[participantIndex].isHoldingStick = false;
        }
        setParticipantArray(newArray);
    };

    const onDeleteClickedParent = (index) => {
        console.log("onDeleteClicked");
        console.log("index", index);
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

    const handleSaveParticipantBtnClicked = () => {

        console.log("dude here...asdf... current array", participantArray)
        console.log("dude here...asdf...newParticipantName", newParticipantName)

        let newParticipant = {name:newParticipantName, isHoldingStick:false};
        let newArray = [...participantArray];
        newArray.push(newParticipant);
        console.log("dude after...asdf... new array", newArray);
        setParticipantArray(newArray);
        setCentredModal(!centredModal);

        console.log("dude after...asdf... current array", participantArray);

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


/*
*         <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
            <MDBModalDialog centered>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Edit</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={editButtonClicked}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <b>Player Name:</b>
                        <MDBInput type='text' value={itemName} onChange={handleNameChange}></MDBInput>
                        <br />
                        <b>Player Position:</b>
                        <Select
                            options={positionOptions}
                            onChange={handlePositionChange}
                        />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color='secondary' onClick={editButtonClicked}>
                            Close
                        </MDBBtn>
                        <MDBBtn onClick={handleSavePositionBtnClicked}>Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
*
*
* */