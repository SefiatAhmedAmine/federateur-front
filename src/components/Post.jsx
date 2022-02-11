import React, { Component } from 'react';

import axios from 'axios';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCategories: [],
            post: {},
            response: {
                "id": 62468377,
                "respondedBy": {},
                "verified": false,
                "message": ""
            }
        };

        let p = Post.loadPost();
        let cat = Post.loadCategories();
        this.state.post = p;
        this.state.allCategories = cat;
        console.log(this.state)
    }
    change = (event) => {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value });
        let r = this.state.response
        r.respondedBy = {
            "id": 1,
            "firstname": "commodo",
            "lastname": "laborum",
            "phoneNumber": "+212673904066",
            "longitude": -7.860166348697782E7,
            "latitude": -7.846050072630888E7,
            "email": "sdelaboudi@gmail.com",
            "password": "hello",
            "roles": [
                "ADMIN"
            ]
        };
        this.setState({ response: r });
    }

    submit = (event) => {
        let id = this.state.post.id;
        let response = this.state.response;
        console.log('https://fedback.azurewebsites.net/v1/api/posts/' + id + '/responds', response);
        axios.post('https://fedback.azurewebsites.net/v1/api/posts/' + id + '/responds', response).then((res) => {
            this.setState({ response: res.data });
            console.log(res.data);
        })
        this.state.response.message = "";
    }
    static loadPost() {
        return JSON.parse(window.localStorage.getItem('post'));
    }
    static loadCategories() {
        return JSON.parse(window.localStorage.getItem('categories'));
    }

    render() {
        return (
            <>
                <body>
                    {/*  <!-- Page content--> */}
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-8">
                                {/*  <!-- Post content--> */}
                                <article>
                                    {/*  <!-- Post header--> */}
                                    <header className="mb-4">
                                        {/*  <!-- Post title--> */}
                                        <h1 className="fw-bolder mb-1">{this.state.post.title}</h1>
                                        {this.state.post.type}
                                        {/*  <!-- Post meta content--> */}
                                        <div className="text-muted fst-italic mb-2">{this.state.post.createdBy.firstname} {this.state.post.createdBy.lastname} le {this.state.post.createdAt} </div>
                                        {/*  <!-- Post categories--> */}
                                        <a className="badge bg-secondary text-decoration-none link-light" href="#!"> {this.state.post.category.name} </a>
                                    </header>
                                    {/*  <!-- Preview image figure--> */}
                                    <figure className="mb-4"><img className="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>
                                    {/*  <!-- Post content--> */}
                                    <section className="mb-5">
                                        <p className="fs-5 mb-4">{this.state.post.description}</p>
                                    </section>
                                </article>
                                {/*  <!-- Comments section--> */}
                                <section className="mb-5">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <div class="chat-message clearfix">
                                                <div class="input-group mb-0">
                                                    <div onChange={this.change} >
                                                        <textarea type="text" class="form-control" placeholder="Enter text here..." name="response.message" rows="5" cols="90"></textarea>
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fa fa-send">
                                                                <button className='btn-block btn btn-primary' onClick={this.submit}>Envoyer une réponse au proprietaire du post </button>
                                                            </i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/*  <!-- Side widgets--> */}
                            <div className="col-lg-4">
                                {/*  <!-- Categories widget--> */}
                                <div className="card mb-4">
                                    <div className="card-header">Categories</div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <ul className="list-unstyled mb-0">
                                                    {
                                                        this.state.allCategories.map((category) => {
                                                            const { id, name } = category;
                                                            return (
                                                                <>
                                                                    <li key={id} className="mt-2 mb-3 my-12 ">
                                                                        <a href="/">{name}</a>
                                                                    </li>
                                                                    <hr />
                                                                </>
                                                            );
                                                        }
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='container '>
                                    <div className="mb-3">
                                        <a href={`https://wa.me/${this.state.post.createdBy.phoneNumber}`} className='whatsapp'>Send whatsapp</a>
                                    </div>
                                    <div className="mb-3">
                                        <a href={`mailto:${this.state.post.createdBy.email}`} className="btn btn-secondary btn-lg">send email</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  <!-- Bootstrap core JS--> */}
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                    {/* {/*  <!-- Core theme JS--> */}
                    <script src="js/scripts.js"></script>
                </body>
            </>
        )
    }

}
