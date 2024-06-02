import React from "react";

function FerretRescueInfoBoy(props) {
    return (
        <section className="container mt-3 mb-3 pt-3 pb-3">
            <h2 className="display-3 mt-3 text-center">Jak się tu znalazłem</h2>
            <p className=" mt-4 " style={{fontSize:"18px", textAlign:"left"}}>
                Poznaj fretke o imieniu {props.name}! Ta urocza fretka trafiła do naszego schroniska w poszukiwaniu nowego domu i kochającej
                rodziny. Historia tej fretki jest pełna przygód i wyzwań, ale mimo wszystko zachował on radość życia i
                otwarte serce. {props.name} został znaleziony samotny na ulicy, bez opieki i bezdomny. W naszym schronisku
                zapewniamy mu bezpieczne schronienie, regularne posiłki oraz miłość i troskę, której tak bardzo
                potrzebuje. Pomimo trudności, jakie napotkał w swoim życiu, {props.name} to zwierzę pełne energii i entuzjazmu.
                Kocha zabawę i towarzystwo ludzi, a jego ciekawość świata jest nieskończona. Teraz, kiedy jest w naszym
                schronisku, {props.name} czeka na swoją szansę na znalezienie stałego domu i kochającą rodzinę, która doceni
                jego wyjątkową osobowość i przyjmie go do swego serca na zawsze. Jeśli szukasz towarzysza do wspólnych
                przygód i chcesz dać temu zwierzątku nową szansę na szczęśliwe życie, zapraszamy do adopcji!
            </p>
        </section>
    )
}

export default FerretRescueInfoBoy;