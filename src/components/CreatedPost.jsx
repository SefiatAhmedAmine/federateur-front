import React from 'react';
import { useState } from 'react';
import '../image.css';

function CreatedPost() {

    const [images, setImages] = useState({images: null});

    const [formulaire, setFormulaire] = useState({
        "id": -14232068,
        "category": {},
        "description": "",
        "createdAt": "2016-02-29T22:02:03.752Z",
        "responds": [],
        "available": true,
        "type": "REQUEST",
        "createdBy": {
            "id": 12266025,
            "firstname": "Oussama",
            "lastname": "Aarab",
            "phoneNumber": "0666666666",
            "longitude": -3960313.807099387,
            "latitude": -25541733.80335647,
            "email": "oussama_aarab@um5.ac.ma",
            "password": "123456",
            "roles": ["USER"]
        }
    })

    return (
        <>
            <section id="appointment" className="appointment section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Création du poste</h2>
                    </div>

                    <form method="post" className="php-email-form">

                        <div className="row">

                            <div className="col-md-6 form-group mt-3">
                                <select name="category" id="category" defaultValue="0" className="form-select">
                                    <option hidden>Choisir la catégorie</option>
                                    <option value="Department 1">Catégorie 1</option>
                                    <option value="Department 2">Catégorie 2</option>
                                    <option value="Department 3">Catégorie 3</option>
                                </select>
                                <div className="validate"></div>
                            </div>
                            <div className="col-md-6 form-group mt-3">
                                <select name="type" id="type" defaultValue="0" className="form-select">
                                    <option hidden>Choisir le type</option>
                                    <option value="REQUEST">REQUEST</option>
                                    <option value="Donation">DONATION</option>
                                </select>
                                <div className="validate"></div>
                            </div>

                        </div>

                        <div className="form-group mt-3">
                            <textarea className="form-control" name="description" rows="5" placeholder="Description"></textarea>
                            <div className="validate"></div>
                        </div>

                        <div className="row py-4">
                            <div className="col-lg-6 mx-auto">
                                <input type="file" className="form-control" id="imagePost" accept="image/png, image/gif, image/jpeg" />
                            </div>
                        </div>

                        <div className="mb-3">

                            <div className="error-message"></div>
                            <div className="sent-message"></div>
                        </div>
                        <div className="text-center"><button type="submit">Créer un poste</button></div>

                    </form>

                </div>
            </section>

        </>
    )

}
export default CreatedPost;