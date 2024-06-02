import HeroSection from "../Components/HeroSection";
import Mission from "../Components/Mission";
import Ferrets from "../Components/Ferrets/Ferrets";
import LastFerret from "../Components/LastFerret";
import WordsForGoogle from "../Components/WordsForGoogle";
import React from "react";

function Homepage(){
    return(
        <div className="App">
            <HeroSection  />
            <Mission />
            <Ferrets/>
            <LastFerret/>
            <WordsForGoogle/>
        </div>
    )
}

export default Homepage;