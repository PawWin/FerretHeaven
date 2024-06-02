import React from "react";

function ContactInfo(props) {
    return (
        <section  className="bg-light" style={{ paddingTop: "10px", minHeight: "80vh" }}>
            <div className="container mt-5">
                <div className="row mt-5 mb-5">
                    <div className="col-md-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9268.088193826894!2d18.527502641000787!3d54.49783461115188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sschronisko!5e0!3m2!1spl!2spl!4v1715713010716!5m2!1spl!2spl"
                            width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-4">
                        <h1 className="text-dark">Skontaktuj sie z nami</h1>
                        <p className="mt-5" style={{fontSize: "20px", textAlign: "left"}}>
                            Nr Telefonu: 666 666 666
                            <br/>
                            E-mail: ferret_heaven@gmail.com
                            <br/>
                            Adres: Gdynia ul. Narcyzowa 10
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo;