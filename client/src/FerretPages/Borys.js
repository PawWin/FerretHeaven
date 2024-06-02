import React from "react";
import FerretAboutBoy from "../Components/FerretAbout/FerretAboutBoy";
import FerretRescueInfoBoy from "../Components/FerretRescueInfo/FerretRescueInfoBoy";
import OtherFerrets from "../Components/OtherFerrets";
import borys from "../img/borys.jpg"

function Borys() {
    return (
        <div className="App">
            <FerretAboutBoy img={borys} name="Borys"/>
            <FerretRescueInfoBoy name="Borys"/>
            <OtherFerrets />
        </div>
    )
}

export default Borys;