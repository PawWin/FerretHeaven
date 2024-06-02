import janusz from "../img/janusz.jpg"
import kuba from "../img/kuba.jpg"
import kasia from "../img/kasia.png"
import kot from "../img/kot.jpg"
import React from "react";
import './Ferrets/card.css';

function OtherFerrets(){
    return(
        <section className="container mt-5 mb-5 pt-3 pb-3">
            <div className="row g-4">
                <div className="col-lg-3 col-6 kolumna">
                    <div className="card border-0">
                        <img src={janusz} className="card-img-top card-img" alt="Janusz"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Janusz</h5>
                            <a href="/Ferrets/Janusz"
                               className="btn btn-success btn-lg mb-auto align-self-center justify-content-center align-top"
                               style={{
                                   backgroundColor: "#85F2AA",
                                   borderColor: "#85F2AA",
                                   color: "black",
                                   marginTop: "10px"
                               }}>ADOPTUJ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6 kolumna">
                    <div className="card border-0">
                        <img src={kuba} className="card-img-top card-img" alt="Kuba"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Kuba</h5>
                            <a href="/Ferrets/Kuba"
                               className="btn btn-success btn-lg mb-auto align-self-center justify-content-center align-top"
                               style={{
                                   backgroundColor: "#85F2AA",
                                   borderColor: "#85F2AA",
                                   color: "black",
                                   marginTop: "10px"
                               }}>ADOPTUJ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6 kolumna">
                    <div className="card border-0">
                        <img src={kasia} className="card-img-top card-img" alt="Kasia"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Kasia</h5>
                            <a href="/Ferrets/Kasia"
                               className="btn btn-success btn-lg mb-auto align-self-center justify-content-center align-top"
                               style={{
                                   backgroundColor: "#85F2AA",
                                   borderColor: "#85F2AA",
                                   color: "black",
                                   marginTop: "10px"
                               }}>ADOPTUJ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6 kolumna">
                    <div className="card border-0">
                        <img src={kot} className="card-img-top card-img" alt="Kot"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Kot</h5>
                            <a href="/Ferrets/Kot"
                               className="btn btn-success btn-lg mb-auto align-self-center justify-content-center align-top"
                               style={{
                                   backgroundColor: "#85F2AA",
                                   borderColor: "#85F2AA",
                                   color: "black",
                                   marginTop: "10px"
                               }}>ADOPTUJ</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default OtherFerrets;