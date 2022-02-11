import React, { useState } from 'react';

import axios from 'axios';

const Categories = () => {

    const [allCategories, setCategories] = useState([])
    const [allPosts, setPosts] = useState([])
    const charge = async () => {
        axios.get('https://fedback.azurewebsites.net/v1/api/categories/')
            .then((res) => {
                setCategories(res.data);
                window.localStorage.setItem('categories', JSON.stringify(allCategories));
            })
            .catch(err => console.log(err));
        axios.get('https://fedback.azurewebsites.net/v1/api/posts/')
            .then((res) => {
                setPosts(res.data);
            })
            .catch(err => console.log(err));
    }
    charge();

    const savePost = (smg) => {
        window.localStorage.setItem('post', JSON.stringify(smg));
    }

    const chargePosts = async (category) => {
        await axios.post('https://fedback.azurewebsites.net/v1/api/categories/posts', category).then((response) => {
            setPosts(response.data);
        });
    };



    const Posts = allPosts && Object.values(allPosts).map((post) => {
        const { id, title, available, description } = post;
        if (available) {
            return (
                <div className="col-md-4 mb-5" key={id}>
                    <div className="card h-100">
                        <div class="card-header card-title fw-bold">{title}</div>
                        <div className="card-body">
                            <p className="card-text">{description}</p>
                        </div>
                        <div className="card-footer"><a className="btn btn-primary btn-sm" onClick={() => { savePost(post) }} href="/post" >Plus d'informations</a></div>
                    </div>
                </div >
            )
        } else {
            return (
                <></>
            )
        }
    }
    )

    const categories = allCategories && Object.values(allCategories).map((category) => {
        const { id, name, description } = category;
        return (
            <button className="nav-link active show" data-bs-toggle="tab" onClick={() => { chargePosts({ id, name, description }) }}>
                <li className="nav-item" key={id}>
                    <div className="card-body ">
                        <div className="mb-3">
                            <span className="display-6 fw-bold">{name}</span>
                            {/* <span className="text-muted">/ mo.</span> */}
                        </div>
                        <div className="small fw-bold text-muted">{description}</div>

                    </div>
                </li>
                <hr />
            </button>
        )
    }
    )

    return (
        <>
            {/* <!-- ======= Departments Section =======--> */}
            <section id="departments" className="departments">
                <div className="container">

                    <div className="section-title">
                        <h2>Posts</h2>
                        <p>Don en argent ou en nature, don de soi... Quelle qu'en soit la forme, soutenir et participer à des actions humanitaires en faveur des personnes vulnérables est un acte considéré comme essentiel dans la tradition de l'Islam. Cette philosophie humaniste est au cœur de notre approche.</p>
                    </div>

                    <div className="row gy-4">
                        <div className="col-lg-3">

                            <ul className="nav nav-tabs flex-column">
                                {categories}
                            </ul>

                        </div>

                        <div className="col-lg-9" >
                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1">
                                    <div className="row gy-4">
                                        <div id="services" className="services" >
                                            <div className="container">
                                                <div className="row" style={{ padding: "10px" }}>
                                                    {Posts}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>{/* <!--End Departments Section--> */}
        </>
    );
}


export default Categories;