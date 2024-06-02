import React from "react";
import wol_1 from "../img/wolontariat_1.jpg";
import wol_2 from "../img/wolontariat_2.jpg";

function AboutContent() {
    return (
        <section>
            <div className="container mt-5">
                <div className="row mt-5 mb-5">
                    <div className="col-md-8">
                        <img
                            src={wol_1}
                            className="img-fluid" alt="Image"/>
                    </div>
                    <div className="col-md-4">
                        <h1 className="text-dark">Witaj</h1>
                        <p className="mt-5" style={{fontSize:"20px",textAlign:"left" }}>
                            Witaj w Schronisku dla Fretek, bezpiecznym azylu dla tych uroczych stworzeń! Nasza misja to
                            zapewnienie opieki, miłości i domu tymczasowego dla fretek w potrzebie. W naszym schronisku
                            każda freka znajduje ciepłe miejsce do odpoczynku, smaczne posiłki oraz zabawki do rozrywki.
                            Nie tylko dbamy o ich fizyczne potrzeby, lecz także o ich dobrostan psychiczny, zapewniając
                            im uwagę i czułość.
                        </p>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-md-4">
                        <p className="mt-5" style={{fontSize:"20px",textAlign:"left" }}>
                            W ramach naszych działań charytatywnych angażujemy społeczność w pomoc bezdomnym frekom.
                            Regularnie organizujemy zbiórki karmy, akcesoriów oraz środków finansowych na leczenie i
                            opiekę weterynaryjną. Ponadto, prowadzimy program adopcji, aby zapewnić frekom nowy,
                            kochający dom na zawsze. Nasze schronisko jest miejscem, gdzie ludzie o wielkich sercach
                            spotykają się, aby pomagać bezdomnym zwierzętom i promować odpowiedzialne zaangażowanie w
                            opiekę nad nimi. Dołączając do naszej społeczności, stajesz się częścią tego pięknego dzieła,
                            zmieniając życie fretek jedną pomocną dłonią i jednym sercem pełnym miłości na raz.
                        </p>
                    </div>
                    <div className="col-md-8">
                        <img
                            src={wol_2}
                            className="img-fluid" alt="Image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutContent;