import React from 'react';
import axios from 'axios';
import '../image.css';

const Post = () => {

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
                                <select name="category" id="category" className="form-select">
                                    <option selected disabled>Choisir la catégorie</option>
                                    <option value="Department 1">Catégorie 1</option>
                                    <option value="Department 2">Catégorie 2</option>
                                    <option value="Department 3">Catégorie 3</option>
                                </select>
                                <div className="validate"></div>
                            </div>
                            <div className="col-md-6 form-group mt-3">
                                <select name="typePost" id="typePost" className="form-select">
                                    <option selected disabled>Choisir le type</option>
                                    <option value="Doctor 1">Type 1</option>
                                    <option value="Doctor 2">Type 2</option>
                                    <option value="Doctor 3">Type 3</option>
                                </select>
                                <div className="validate"></div>
                            </div>

                        </div>

                        <div className="form-group mt-3">
                            <textarea className="form-control" name="description" rows="5" placeholder="Description"></textarea>
                            <div className="validate"></div>
                        </div>

                        <div class="row py-4">
                            <div class="col-lg-6 mx-auto">
                                <input type="file" class="form-control" id="imagePost" accept="image/png, image/gif, image/jpeg" />
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
    );
}

export default Post;