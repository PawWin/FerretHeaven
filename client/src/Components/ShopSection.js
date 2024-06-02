import hero_pod from "../img/hero_pod.jpg";
import React from "react";

function ShopSection() {
    return (
        <section
            className="hero-section position-relative text-white d-flex flex-column align-items-start hero_section">
            <img src={hero_pod} alt="Hero" className="position-absolute w-100 h-100 hero-img"/>
            <h1 className="position-relative display-2 fw-bold mb-0 pl-2 hero-h1">Fretki do Adopcji</h1>

        </section>
    )
}

export default ShopSection;
