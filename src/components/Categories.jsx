import React, { Component } from 'react';

import axios from 'axios';

export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCategories: [],
            allPosts: []
        };
        this.charge();
    }

    savePost(smg) {
        window.localStorage.setItem('post', JSON.stringify(smg));
    }

    chargePosts = async (category) => {
        await axios.post('https://fedback.azurewebsites.net/v1/api/categories/posts', category).then((response) => {
            this.setState({ allPosts: response.data });
        });
    };

    charge() {
        axios.get('https://fedback.azurewebsites.net/v1/api/categories/')
            .then((res) => {
                this.setState({ allCategories: res.data });
                window.localStorage.setItem('categories', JSON.stringify(this.state.allCategories));
            })
            .catch(err => console.log(err));
        axios.get('https://fedback.azurewebsites.net/v1/api/posts/')
            .then((res) => {
                this.setState({ allPosts: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                {/* <!-- ======= Departments Section =======--> */}
                <section id="departments" className="departments">
                    <div className="container">

                        <div className="section-title">
                            <h2>Categories</h2>
                        </div>

                        <div className="row gy-4">
                            <div className="col-lg-3">

                                <ul className="nav nav-tabs flex-column">
                                    {
                                        this.state.allCategories.map((category) => {
                                            const { id, name, description } = category;
                                            return (
                                                <button className="nav-link active show" data-bs-toggle="tab" onClick={() => { this.chargePosts({ id, name, description }) }}>
                                                    <li className="nav-item" key={id}>
                                                        <div class="card-body p-5">
                                                            <div class="small text-uppercase fw-bold text-muted">{description}</div>
                                                            <div class="mb-3">
                                                                <span class="display-4 fw-bold">{name}</span>
                                                                {/* <span class="text-muted">/ mo.</span> */}
                                                            </div>
                                                        </div>
                                                    </li>
                                                </button>
                                            )
                                        }
                                        )
                                    }
                                </ul>

                            </div>

                            <div className="col-lg-9">
                                <div className="tab-content">
                                    <div className="tab-pane active show" id="tab-1">
                                        <div className="row gy-4">
                                            <div id="services" className="services">
                                                <div className="container">
                                                    <div className="row">
                                                        {
                                                            this.state.allPosts && Object.values(this.state.allPosts).map((post) => {
                                                                const { id, title, available, description } = post;
                                                                if (available) {
                                                                    return (
                                                                        <div class="col-md-4 mb-5" key={id}>
                                                                            <div class="card h-100">
                                                                                <div class="card-body">
                                                                                    <h2 class="card-title">{title}</h2>
                                                                                    <p class="card-text">{description}</p>
                                                                                </div>
                                                                                <div class="card-footer"><a class="btn btn-primary btn-sm" onClick={() => { this.savePost(post) }} href="/post" >Plus d'informations</a></div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                            }
                                                            )
                                                        }
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
}
