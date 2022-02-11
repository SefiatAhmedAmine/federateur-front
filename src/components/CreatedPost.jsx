import React from 'react';
import { useState, useEffect } from 'react';
import '../image.css';
import { getCategory, createPost } from '../services/Api';

function CreatedPost() {

    // const [images, setImages] = useState();

    const [categories, setCategories] = useState([])

    const [formulaire, setFormulaire] = useState({
        "id": 26,
        "category": null,
        "description": "",
        "createdAt": "2016-02-29T22:02:03.752Z",
        "responds": [],
        "available": true,
        "type": "",
        "createdBy": {
            "id": 1,
            "firstname": "Oussama",
            "lastname": "Aarab",
            "phoneNumber": "0624085197",
            "longitude": 6.3755290673898965E7,
            "latitude": -4.356204952808507E7,
            "email": "oussama_aarab@um5.ac.ma",
            "password": "$2a$10$4f3fZWXHkRLybyg61e4D..7xMH9xg6jX21P0t3I/UiGm/MSejjpMC",
            "roles": ["USER"]
        }
    })

    useEffect(
        () => {
            async function getDataCategories() {
                try {
                    const response = await getCategory();
                    //console.log(response);
                    setCategories(response);
                    
                } catch ({ response }) {
                    console.log(response);
                }
            }
            getDataCategories();
        },
        [setCategories]
    );

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        
        setFormulaire({...formulaire, [name] : value})

        let data = formulaire;
        data.category = categories[parseInt(formulaire.category)];
        setFormulaire(data);
        console.log(formulaire)

    }

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            let data = formulaire;
            data.category = categories[parseInt(formulaire.category)];
            setFormulaire(data);
            const submit = await createPost(formulaire);
            console.log(submit);
        }catch ({ response }) {
            
            console.log(formulaire);   
        }
        
    }
    
    return (
        <>
            <section id="appointment" className="appointment section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Création du poste</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="php-email-form">

                        <div className="row">

                            <div className="col-md-6 form-group mt-3">
                                <select name="category" id="category" defaultValue="0" onChange={handleChange} className="form-select">
                                    <option hidden>Choisir la catégorie</option>
                                    {
                                        categories.map((cate, index) => (<option key = {index} value={index}>{cate.name}</option>))
                                    }    
                                </select>
                                <div className="validate"></div>
                            </div>

                            <div className="col-md-6 form-group mt-3">
                                <select name="type" id="type" defaultValue="0" onChange={handleChange} className="form-select">
                                    <option hidden>Choisir le type</option>
                                    <option value="REQUEST">REQUEST</option>
                                    <option value="Donation">DONATION</option>
                                </select>
                                <div className="validate"></div>
                            </div>

                        </div>

                        <div className="form-group mt-3">
                            <textarea className="form-control" name="description" onChange={handleChange} rows="5" placeholder="Description"></textarea>
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