import hero_img from "../img/hero_img.jpg";
import React from "react";

function HeroSection() {
    return (
        <section
            className="hero-section position-relative text-white d-flex flex-column align-items-start hero_section">
            <img src={hero_img} alt="Hero" className="position-absolute w-100 h-100 hero-img"/>
            <h1 className="position-relative display-2 fw-bold mb-0 pl-2 hero-h1">Dom Znalazło</h1>
            <p className="position-relative display-1 text-success mb-0 hero-p1">1369</p>
            <p className="position-relative display-3 mb-0 hero-p2">Fretek</p>
        </section>
    )
}

export default HeroSection;