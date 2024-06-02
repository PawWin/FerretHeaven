import React from "react";
import FerretAboutBoy from "../Components/FerretAbout/FerretAboutBoy";
import FerretRescueInfoBoy from "../Components/FerretRescueInfo/FerretRescueInfoBoy";
import OtherFerrets from "../Components/OtherFerrets";
import bogus from "../img/bogumil.jpg"

function Bogumil() {
    return (
        <div className="App">
            <FerretAboutBoy img={bogus} name="Bogumił"/>
            <FerretRescueInfoBoy name="Bogumił"/>
            <OtherFerrets />
        </div>
    )
}

export default Bogumil;