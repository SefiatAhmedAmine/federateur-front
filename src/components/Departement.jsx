import React, { Component } from 'react';

import axios from 'axios';

export default class Departement extends Component {
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
                            <h2>Departments</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row gy-4">
                            <div className="col-lg-3">

                                <ul className="nav nav-tabs flex-column">
                                    {
                                        this.state.allCategories.map((category) => {
                                            const { id, name, description } = category;
                                            return (
                                                <li className="nav-item" key={id}>
                                                    <a className="nav-link active show" data-bs-toggle="tab" onClick={() => { this.chargePosts({ id, name, description }) }}>
                                                        <div class="d-flex align-items-stretch">
                                                            <div class="icon-box ">
                                                                <i class="bx bx-receipt"></i>
                                                                <h4>{name}</h4>
                                                                <img src="data:image/jpeg;base64,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" />
                                                                <p>{description}</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
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
                                                                const { id,title, description } = post;
                                                                return (
                                                                    <a className="nav-link active show" data-bs-toggle="tab" key={id} onClick={() => { this.savePost(post)}} href="/post">
                                                                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                                                            <div className="icon-box">
                                                                                <div className="icon"><i className="fas fa-heartbeat"></i></div>
                                                                                <h4><a >{title}</a></h4>
                                                                                <img src="data:image/jpeg;base64,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" />
                                                                                <p>{description}</p>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                )
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
