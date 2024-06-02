import React from "react";
import {Link} from "react-router-dom";

function FerretAboutGirl(props) {
    return(
        <section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <img
                            src={props.img}
                            className="img-fluid" alt={props.name}/>
                    </div>
                    <div className="col-md-4">
                        <h1 className="text-success">{props.name}</h1>
                        <p className="mt-5">
                            Witaj! Jestem {props.name}, urocza fretka pełna energii i ciekawości, która szuka swojego domu.
                            Moje futerko jest miękkie jak aksamit, a moje oczy błyszczą inteligencją i radością życia.
                            <br/>
                            Jestem gotowa na nowe przygody i chcę dzielić się nimi z kochającą rodziną. Czy szukasz
                            towarzyszki do wspólnych zabaw i szalonych wygłupów? W takim razie nie mogłeś trafić lepiej!
                            <br/>
                            Pomimo mojej małej sylwetki, mam wielkie serce, które bije dla tych, którym ufam. Lubię być
                            w centrum uwagi, ale potrafię być też spokojna i towarzyska.
                            <br/>
                            Jeśli myślisz, że mogę być idealnym dodatkiem do Twojej rodziny, nie wahaj się! Przyjmij
                            mnie do swojego domu, a obiecuję, że wypełnię go miłością, radością i mnóstwem zabawy!
                        </p>
                        <Link to={`/ferrets/adoption`} className="btn btn-success btn-lg mb-auto align-self-center justify-content-center align-top"
                           style={{
                               backgroundColor: "#85F2AA",
                               borderColor: "#85F2AA",
                               color: "black",
                               marginTop: "10px"
                           }}>ADOPTUJ</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FerretAboutGirl;