import borys from "../../img/borys.jpg";
import kamila from "../../img/kamila.jpg";
import andrei from "../../img/andrei.jpg";
import bogumil from "../../img/bogumil.jpg";
import React from "react";
import './card.css';

function Ferrets(){
    return(
        <section className="container mt-5 mb-5 pt-3 pb-3">
            <div className="row g-4">
                <div className="col-lg-3 col-6 kolumna">
                    <div className="card border-0">
                        <img src={borys} className="card-img-top card-img" alt="Borys"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Borys</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6 kolumna">
                    <div className="card border-0">
                        <img src={kamila} className="card-img-top card-img" alt="Kamila"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Kamila</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6 kolumna">
                    <div className="card border-0">
                        <img src={andrei} className="card-img-top card-img" alt="Andrzej"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Andrzej</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6 kolumna">
                    <div className="card border-0">
                        <img src={bogumil} className="card-img-top card-img" alt="Bogumił"/>
                        <div className="card-body px-0 bg-light">
                            <h5 className="card-title text-dark mb-0 pl-2">Bogumił</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Ferrets;