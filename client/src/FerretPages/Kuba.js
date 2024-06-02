import React from "react";
import FerretAboutBoy from "../Components/FerretAbout/FerretAboutBoy";
import FerretRescueInfoBoy from "../Components/FerretRescueInfo/FerretRescueInfoBoy";
import OtherFerrets from "../Components/OtherFerrets";
import kuba from "../img/kuba.jpg"

function Kuba() {
    return (
        <div className="App">
            <FerretAboutBoy img={kuba} name="Kuba"/>
            <FerretRescueInfoBoy name="Kuba"/>
            <OtherFerrets />
        </div>
    )
}

export default Kuba;