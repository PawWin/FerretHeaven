import React from "react";
import FerretAboutBoy from "../Components/FerretAbout/FerretAboutBoy";
import FerretRescueInfoBoy from "../Components/FerretRescueInfo/FerretRescueInfoBoy";
import OtherFerrets from "../Components/OtherFerrets";
import janusz from "../img/janusz.jpg"

function Janusz() {
    return (
        <div className="App">
            <FerretAboutBoy img={janusz} name="Janusz"/>
            <FerretRescueInfoBoy name="Janusz"/>
            <OtherFerrets />
        </div>
    )
}

export default Janusz;