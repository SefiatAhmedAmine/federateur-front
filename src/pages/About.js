import React from 'react';

const About = () => {
    return (
        <>
            {/* <!-- ======= About Section =======--> */}
            <section id="about" className="about">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                            <a href="https://www.youtube.com/embed/pwej2j_35mo" className="glightbox play-btn mb-4"> </a>
                        </div>

                        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <div className="section-title">
                                <h2>About Us</h2>
                                <p>Nous intervenons dans l'urgence, en répondant aux besoins fondamentaux des personnes les plus vulnérables, et dans le développement, en fournissant aux populations les moyens d’être autonomes. En 2021, nous avions soutenu plus de 12 millions de personnes vulnérables dans près de 50 pays. Chaque année, nous intervenons dans une vingtaine de pays. </p><br/>
                                <p>Pour soutenir les plus vulnérables, nos équipes s'appuient sur leurs compétences dans de nombreux domaines : eau, hygiène et assainissement ; éducation et protection de l'enfance, programme de parrainage d'orphelins ; mise à l'abri et réhabilitation ; sécurité alimentaire et lutte contre la faim ; accompagnement social en vue d'une réinsertion progressive et durable ; actions de plaidoyer auprès des décideurs et des institutions.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>{/* <!--End About Section--> */}
        </>
    );
}

export default About;