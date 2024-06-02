import React from "react";
import FerretAboutBoy from "../Components/FerretAbout/FerretAboutBoy";
import FerretRescueInfoBoy from "../Components/FerretRescueInfo/FerretRescueInfoBoy";
import OtherFerrets from "../Components/OtherFerrets";
import gucio from "../img/gucio.jpg"

function Gucio() {
    return (
        <div className="App">
            <FerretAboutBoy img={gucio} name="Gucio"/>
            <FerretRescueInfoBoy name="Gucio"/>
            <OtherFerrets />
        </div>
    )
}

export default Gucio;