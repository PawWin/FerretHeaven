import last_adpt from "../img/last_adpt.jpg";
import React from "react";

function LastFerret() {
    return (
        <section className="container mt-5 mb-0">
            <div className="row g-4">
                <div className="col-lg-8">
                    <img src={last_adpt} alt="Latest Adoption" className="img-fluid"
                         style={{width: "100%", maxHeight: "80%"}}/>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex flex-column h-100 justify-content-between">
                        <div>
                            <h2 className="text-success mb-4">Ostatnia zaadoptowana fretka</h2>
                            <p className="mb-5">
                                Mamy ogromną radość ogłosić, że ostatnia fretka znalazła nowy dom! Dziękujemy wszystkim
                                za wsparcie i zaangażowanie w proces adopcji. To dzięki Wam nasze schronisko staje się
                                prawdziwym domem dla wielu potrzebujących zwierząt.
                            </p>
                        </div>
                        <a href="/last-adopted"
                           className="btn btn-success btn-lg mb-auto align-self-center justify-content-center align-top"
                           style={{backgroundColor: "#85F2AA", borderColor: "#85F2AA", color: "black"}}>KLIKNIJ
                            TUTAJ</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastFerret;