import React from "react";
import {MDBBtn, MDBCheckbox, MDBIcon} from "mdb-react-ui-kit";

function Participant({participantName, idx, isHoldingStick, isStickGreyedOut, onStickClicked, onDeleteClicked}) {

    let checkbox = '';
    if (isHoldingStick === true) {
        checkbox = <MDBCheckbox name='flexCheck' onChange={(e) => onStickClicked(e, idx)} id='flexCheckDefault' defaultChecked />
    } else if (isStickGreyedOut === true) {
        checkbox = <MDBCheckbox name='flexCheck' onChange={(e) => onStickClicked(e, idx)} id='flexCheckDefault' disabled />
    } else {
        checkbox = <MDBCheckbox name='flexCheck' onChange={(e) => onStickClicked(e, idx)} id='flexCheckDefault' />
    }

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