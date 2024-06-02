import React from "react";
import OtherFerrets from "../Components/OtherFerrets";
import kamila from "../img/kamila.jpg"
import FerretAboutGirl from "../Components/FerretAbout/FerretAboutGirl";
import FerretRescueInfoGirl from "../Components/FerretRescueInfo/FerretRescueInfoGirl";

function Kamila() {
    return (
        <div className="App">
            <FerretAboutGirl img={kamila} name="Kamila"/>
            <FerretRescueInfoGirl name="Kamila"/>
            <OtherFerrets />
        </div>
    )
}

export default Kamila;