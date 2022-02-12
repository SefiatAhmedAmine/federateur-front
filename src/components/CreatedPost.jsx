import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import '../image.css';
import { getCategory, createPost } from '../services/Api';

function CreatedPost() {

    // const [images, setImages] = useState();

    const [categories, setCategories] = useState([])

    const [formulaire, setFormulaire] = useState({
        "title": "",
        "category": null,
        "description": "",
        "createdAt": "2016-02-29T22:02:03.752Z",
        "responds": [],
        "available": true,
        "type": "",
        "createdBy": JSON.parse(localStorage.getItem("user"))
    })

    useEffect(
        () => {
            async function getDataCategories() {
                try {
                    const response = await getCategory();
                    setCategories(response);

                } catch ({ response }) {
                    console.log(response);
                }
            }
            getDataCategories();
        },
        [setCategories]
    );

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;

        setFormulaire({ ...formulaire, [name]: value })

        //let data = formulaire;
        //data.category = categories[parseInt(formulaire.category)];
        //setFormulaire(data);
        console.log(formulaire)

    }

    const handleChangeCategory = (event) => {
        let f = formulaire ;
        f.category=categories[event.target.value];
        setFormulaire(f)
        console.log(event.target.value)
        console.log(formulaire)

    }

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            //let data = formulaire;
            //data.category = categories[parseInt(formulaire.category)];
            //setFormulaire(data);
            const submit = await createPost(formulaire);
            console.log(submit);
        } catch ({ response }) {

            console.log("Erreur");
        }
        let user = JSON.parse(window.localStorage.getItem('user'));
        console.log(user)
        axios.post('https://fedback.azurewebsites.net/v1/api/users/posts', user)
            .then((res) => {
                window.localStorage.setItem('posts', JSON.stringify(res.data));
                console.log(res.data)
            })
            .catch(err => console.log(err));

    }

    return (
        <>
            <section id="appointment" className="appointment section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Création du poste</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="php-email-form">

                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="title" id="title" onChange={handleChange} placeholder="Titre" required />
                        </div>

                        <div className="row">

                            <div className="col-md-6 form-group mt-3">
                                <select name="category" id="category" defaultValue="0" onChange={handleChangeCategory} className="form-select" required>
                                    <option hidden>Choisir la catégorie</option>
                                    {
                                        categories.map((cate, index) => (<option key={cate.name} value={index}>{cate.name}</option>))
                                    }
                                </select>
                                <div className="validate"></div>
                            </div>

                            <div className="col-md-6 form-group mt-3">
                                <select name="type" id="type" defaultValue="0" onChange={handleChange} className="form-select" required>
                                    <option hidden>Choisir le type</option>
                                    <option value="REQUEST">REQUEST</option>
                                    <option value="DONATION">DONATION</option>
                                </select>
                                <div className="validate"></div>
                            </div>

                        </div>

                        <div className="form-group mt-3">
                            <textarea className="form-control" name="description" onChange={handleChange} rows="5" placeholder="Description" required></textarea>
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