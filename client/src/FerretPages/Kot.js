import React from "react";
import FerretAboutBoy from "../Components/FerretAbout/FerretAboutBoy";
import FerretRescueInfoBoy from "../Components/FerretRescueInfo/FerretRescueInfoBoy";
import OtherFerrets from "../Components/OtherFerrets";
import kot from "../img/kot.jpg"

function Kot() {
    return (
        <div className="App">
            <FerretAboutBoy img={kot} name="Kot"/>
            <FerretRescueInfoBoy name="Kot"/>
            <OtherFerrets />
        </div>
    )
}

export default Kot;