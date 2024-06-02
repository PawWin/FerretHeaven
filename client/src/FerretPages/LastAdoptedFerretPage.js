import React from "react";
import OtherFerrets from "../Components/OtherFerrets";
import LastAdoptedFerret from "../Components/LastAdoptedFerret";
import LastAdoptedFerretInfo from "../Components/LastAdoptedFerretInfo";

function LastAdoptedFerretPage() {
    return (
        <div className="App">
            <LastAdoptedFerret/>
            <LastAdoptedFerretInfo/>
            <OtherFerrets />
        </div>
    )
}

export default LastAdoptedFerretPage;