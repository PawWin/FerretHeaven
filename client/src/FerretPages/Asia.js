import React from "react";
import OtherFerrets from "../Components/OtherFerrets";
import asia from "../img/asia.jpg"
import FerretAboutGirl from "../Components/FerretAbout/FerretAboutGirl";
import FerretRescueInfoGirl from "../Components/FerretRescueInfo/FerretRescueInfoGirl";

function Asia() {
    return (
        <div className="App">
            <FerretAboutGirl img={asia} name="Asia"/>
            <FerretRescueInfoGirl name="Asia"/>
            <OtherFerrets />
        </div>
    )
}

export default Asia;