import React, { Component } from 'react';

import axios from 'axios';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCategories: [],
            post: {}
        };
        let p = Post.loadPost();
        let cat = Post.loadCategories();
        this.state.post = p;
        this.state.allCategories = cat;
        console.log(this.state)
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
                                            {/*  <!-- Comment form--> */}
                                            <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                                            {/*  <!-- Comment with nested comments--> */}
                                            <div className="d-flex mb-4">
                                                {/*  <!-- Parent comment--> */}
                                                <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                <div className="ms-3">
                                                    <div className="fw-bold">Commenter Name</div>
                                                    If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                                    {/*  <!-- Child comment 1--> */}
                                                    <div className="d-flex mt-4">
                                                        <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                        <div className="ms-3">
                                                            <div className="fw-bold">Commenter Name</div>
                                                            And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                                        </div>
                                                    </div>
                                                    {/*  <!-- Child comment 2--> */}
                                                    <div className="d-flex mt-4">
                                                        <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                        <div className="ms-3">
                                                            <div className="fw-bold">Commenter Name</div>
                                                            When you put money directly to a problem, it makes a good headline.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  <!-- Single comment--> */}
                                            <div className="d-flex">
                                                <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                <div className="ms-3">
                                                    <div className="fw-bold">Commenter Name</div>
                                                    When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
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
                                                                <li key={id}>
                                                                    <a href="/">{name}</a>
                                                                </li>
                                                            );
                                                        }
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a href={`https://wa.me/${this.state.post.createdBy.phoneNumber}`}>Send whatsapp</a>
                                    <br />
                                    <a href={`mailto : ${this.state.post.createdBy.email}`}>send email</a>
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