import React from "react";
import FerretAboutBoy from "../Components/FerretAbout/FerretAboutBoy";
import FerretRescueInfoBoy from "../Components/FerretRescueInfo/FerretRescueInfoBoy";
import OtherFerrets from "../Components/OtherFerrets";
import andrei from "../img/andrei.jpg"

function Andrzej() {
    return (
        <div className="App">
            <FerretAboutBoy img={andrei} name="Andrzej"/>
            <FerretRescueInfoBoy name="Andrzej"/>
            <OtherFerrets />
        </div>
    )
}

export default Andrzej;