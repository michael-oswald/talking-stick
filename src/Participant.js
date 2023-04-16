import React from "react";
import {MDBBtn, MDBCheckbox, MDBIcon} from "mdb-react-ui-kit";
function Participant({participantName, idx, isHoldingStick, onStickClicked, onDeleteClicked}) {
    console.log("In Participant, participantName ",participantName);
    console.log("In Participant, idx: ", idx);
    console.log("In Participant, isHoldingStick: ", isHoldingStick);

    let checkbox = isHoldingStick ?
        <MDBCheckbox name='flexCheck' onChange={(e) => onStickClicked(e, idx)} id='flexCheckDefault' defaultChecked />
        :
        <MDBCheckbox name='flexCheck' onChange={(e) => onStickClicked(e, idx)} id='flexCheckDefault' />


    return (
        <tr>
            <td>{checkbox}</td>
            <td>{participantName}</td>
            <td><MDBBtn color='danger' className='text-right' onClick={onDeleteClicked}>
                <MDBIcon fas icon="trash-alt" />
            </MDBBtn></td>
        </tr>
    );
}
export default Participant;