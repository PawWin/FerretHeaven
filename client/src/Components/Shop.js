import borys from "../img/borys.jpg";
import kamila from "../img/kamila.jpg";
import andrei from "../img/andrei.jpg";
import bogumil from "../img/bogumil.jpg";
import asia from "../img/asia.jpg";
import ola from "../img/ola.png";
import gucio from "../img/gucio.jpg";
import julcio from "../img/julcio.jpg";
import React from "react";
import './Ferrets/card.css';

function Shop() {
    return (
        <section className="container mt-5 mb-5 pt-3 pb-3">
            <h1 className="text-dark pb-5">Nasi Podopieczni</h1>
            <div className="row g-4" >
                <div className="col-lg-3 col-6 kolumna">
                    <div className="card border-0">
                        <img src={borys} className="card-img-top card-img" alt="Borys"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Borys</h5>
                            <a href="/ferrets/Borys"
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
                        <img src={kamila} className="card-img-top card-img" alt="Kamila"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Kamila</h5>
                            <a href="/ferrets/Kamila"
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
                        <img src={andrei} className="card-img-top card-img" alt="Andrzej"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Andrzej</h5>
                            <a href="/ferrets/Andrzej"
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
                        <img src={bogumil} className="card-img-top card-img" alt="Bogumił"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Bogumił</h5>
                            <a href="/ferrets/Bogumil"
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
            <div className="row g-4 mt-5 mb-5">
                <div className="col-lg-3 col-6 kolumna">
                    <div className="card border-0">
                        <img src={asia} className="card-img-top card-img" alt="Borys"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Asia</h5>
                            <a href="/ferrets/Asia"
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
                        <img src={ola} className="card-img-top card-img" alt="Kamila"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Ola</h5>
                            <a href="/ferrets/Ola"
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
                        <img src={gucio} className="card-img-top card-img" alt="Andrzej"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Gucio</h5>
                            <a href="/ferrets/Gucio"
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
                        <img src={julcio} className="card-img-top card-img" alt="Bogumił"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Julcio</h5>
                            <a href="/ferrets/Julcio"
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

export default Shop;