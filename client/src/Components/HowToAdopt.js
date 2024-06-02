import how_adopt from "../img/how_to_adopt.jpg";
import React from "react";


function HowToAdopt(){
    return(
        <section className="container mt-5 mb-5 pb-5">
            <div className="row g-4 mt-5">
                <div className="col-lg-8">
                    <img src={how_adopt} alt="Latest Adoption" className="img-fluid" style={{height: "400px", width: "800px"}}/>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex flex-column h-100 justify-content-between">
                        <div>
                            <h2 className="text-success mb-4 text-center">Jak adoptować fretkę</h2>
                            <p className="mb-5 mt-5 text-center">
                                Zaadoptuj fretkę: Znajdź swojego futrzanego przyjaciela w schronisku lub poprzez adopcję od hodowcy. Daj im kochający dom!
                            </p>
                        </div>
                        <a href="https://youtu.be/7kkBwIK-J70" className="btn btn-success btn-lg mb-auto align-self-center justify-content-center align-top" target={"_blank"} rel={"noreferrer"} style={{backgroundColor: "#85F2AA", borderColor: "#85F2AA", color: "black" }}>KLIKNIJ TUTAJ</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowToAdopt;