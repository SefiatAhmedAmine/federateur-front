import axios from "axios";
import React, { Component } from "react";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
            user: {}
        };
        this.state.user = JSON.parse(window.localStorage.getItem('user'));
        this.charge();
    }

    charge() {
        axios.post('https://fedback.azurewebsites.net/v1/api/users/posts', this.state.user)
            .then((res) => {
                this.setState({ allPosts: res.data });
            })
            .catch(err => console.log(err));
    }

    savePost(smg) {
        window.localStorage.setItem('post', JSON.stringify(smg));
    }


    render() {
        return (
            <>
                <div class="container bootstrap snippet">

                    <div class="row">
                        <div class="col-sm-3">{/* <!--left col--> */}


                            <div class="panel panel-default">
                                <div class="panel-heading"><h2>Mes posts</h2><i class="fa fa-link fa-1x"></i></div>
                            </div>


                            <ul class="list-group">
                                <li class="list-group-item text-muted">Activity <i class="fa fa-dashboard fa-1x"></i></li>
                                {
                                    this.state.allPosts && Object.values(this.state.allPosts).map((post) => {
                                        const { id, title, description, available } = post;
                                        if (available) {
                                            return (
                                                <li class="list-group-item text-right">
                                                    <span class="pull-left">
                                                        <strong>{title}</strong>
                                                    </span>
                                                    <br />
                                                    <a type="button" class="btn btn-primary" href="/editPost" onClick={() => { this.savePost(post) }} >Modifier</a>
                                                    <a type="button" class="btn btn-danger">supprimer</a>
                                                </li>
                                            )
                                        }
                                    }
                                    )
                                }
                            </ul>

                        </div>{/* <!--/col-3--> */}
                        <div class="col-sm-9">
                            <div class="tab-content">
                                <div class="tab-pane active" id="home">
                                    <hr />
                                    <form class="form" action="##" method="post" id="registrationForm">
                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="first_name"><h4>First name</h4></label>
                                                <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any." />
                                            </div>
                                        </div>
                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="last_name"><h4>Last name</h4></label>
                                                <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any." />
                                            </div>
                                        </div>

                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="phone"><h4>Phone</h4></label>
                                                <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." />
                                            </div>
                                        </div>

                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="email"><h4>Email</h4></label>
                                                <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." />
                                            </div>
                                        </div>
                                        <div class="form-group">

                                            <div class="col-xs-6">
                                                <label for="password"><h4>Password</h4></label>
                                                <input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password." />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-xs-12">
                                                <br />
                                                <button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>
                                            </div>
                                        </div>
                                    </form>

                                    <hr />

                                </div>{/* <!--/tab-pane--> */}

                            </div>

                            {/* <!--/tab-pane--> */}
                        </div>{/* <!--/tab-content--> */}

                    </div>{/* <!--/col-9--> */}
                </div>{/* <!--/row--> */}
            </>
        )
    }
}