import React from "react";
import FerretAboutBoy from "../Components/FerretAbout/FerretAboutBoy";
import FerretRescueInfoBoy from "../Components/FerretRescueInfo/FerretRescueInfoBoy";
import OtherFerrets from "../Components/OtherFerrets";
import julcio from "../img/julcio.jpg"

function Julcio() {
    return (
        <div className="App">
            <FerretAboutBoy img={julcio} name="Julcio"/>
            <FerretRescueInfoBoy name="Julcio"/>
            <OtherFerrets />
        </div>
    )
}

export default Julcio;