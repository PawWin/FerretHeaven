import React from "react";
import OtherFerrets from "../Components/OtherFerrets";
import kasia from "../img/kasia.png"
import FerretAboutGirl from "../Components/FerretAbout/FerretAboutGirl";
import FerretRescueInfoGirl from "../Components/FerretRescueInfo/FerretRescueInfoGirl";

function Kasia() {
    return (
        <div className="App">
            <FerretAboutGirl img={kasia} name="Kasia"/>
            <FerretRescueInfoGirl name="Kasia"/>
            <OtherFerrets />
        </div>
    )
}

export default Kasia;