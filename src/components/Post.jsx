import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCategories: [],
            post: {},
            response: {
                "respondedBy": JSON.parse(localStorage.getItem("user")),
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
        //console.log(event.target.name)
        let r = this.state.response;
        r.message = event.target.value;
        this.setState({ reponse: r })
        console.log("---",this.state.response)
    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    refreshPage = () => {
        this.sleep(1000).then(r => {
            window.location.reload();
        })

    }

    submit = (event) => {
        console.log('https://fedback.azurewebsites.net/v1/api/posts/' + this.state.post.id + '/responds', this.state.response);
        axios.post('https://fedback.azurewebsites.net/v1/api/posts/' + this.state.post.id + '/responds', this.state.response).then((res) => {
            this.setState({ response: res.data });
            console.log(res.data);
        })
        let r = this.state.response
        r.message = "";
        this.setState({ response: r })
        this.refreshPage();
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
                <div>
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
                                            <div className="chat-message clearfix">
                                                <div className="input-group mb-0">
                                                    <div>
                                                        <textarea type="text" className="form-control" placeholder="Message de réponse" name="response.message" onChange={this.change} rows="5" cols="90"></textarea>
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fa fa-send">
                                                                <Link role='button' to='/categories' className='btn-block btn btn-primary' onClick={this.submit}>Envoyer une réponse au proprietaire du post </Link>
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
                                    <div className="card-header">Catégories</div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-12 ">
                                                <ul className="list-unstyled mb-0 ">
                                                    {
                                                        this.state.allCategories.map((category, index) => {
                                                            return (
                                                                <div key={index}>
                                                                    <li className="mt-2 mb-3 my-12 d-flex justify-content-center">
                                                                        <a href="/">{category.name}</a>
                                                                    </li>
                                                                    <hr />
                                                                </div>
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
                                        <a href={`https://wa.me/${this.state.post.createdBy.phoneNumber}`} className='btn btn-success btn-lg'>Send whatsapp</a>
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
                </div>
            </>
        )
    }

}