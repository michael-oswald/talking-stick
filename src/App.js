import './App.css';
import { MDBTypography, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React  from "react";
import ParticipantList from "./ParticipantList";
import Timer from "./Timer";
//import { useSearchParams } from "react-router-dom";

export default function App() {
   /*
   TODO:

    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("participants")*/

  return (
      <>
        <MDBContainer className="text-center">
          <MDBTypography className='display-1 pb-3 mb-3 border-bottom'>
            🎙 Talking Stick 🥢
          </MDBTypography>
            <p>talking stick description here...</p>
          <br />
          <br />

            <MDBContainer>
                <MDBRow>
                    <MDBCol size='6'>
                        <ParticipantList/>
                    </MDBCol>
                    <MDBCol size='6'>
                        <Timer/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


        </MDBContainer>
      </>
  );
}