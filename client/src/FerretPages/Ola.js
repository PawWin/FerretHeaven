import React from "react";
import OtherFerrets from "../Components/OtherFerrets";
import ola from "../img/ola.png"
import FerretAboutGirl from "../Components/FerretAbout/FerretAboutGirl";
import FerretRescueInfoGirl from "../Components/FerretRescueInfo/FerretRescueInfoGirl";

function Ola() {
    return (
        <div className="App">
            <FerretAboutGirl img={ola} name="Ola"/>
            <FerretRescueInfoGirl name="Ola"/>
            <OtherFerrets />
        </div>
    )
}

export default Ola;