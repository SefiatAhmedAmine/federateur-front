import React, { useEffect, useState } from 'react';
import axios from "axios";

const Account = () => {
    const [user, setUser] = useState([])
    const [response, setResponse] = useState([])
    const [allPosts, setPosts] = useState([])

    useEffect(() => {
        setUser(JSON.parse(window.localStorage.getItem('user')));
        setPosts(JSON.parse(window.localStorage.getItem('posts')));
    }, []);



    const savePost = (smg) => {
        window.localStorage.setItem('post', JSON.stringify(smg));
    }

    const deletePost = async (post) => {
        console.log('https://fedback.azurewebsites.net/v1/api/posts/' + post.id + '/delete')
        await axios.delete('https://fedback.azurewebsites.net/v1/api/posts/' + post.id + '/delete')
            .then((res) => {
                axios.post('https://fedback.azurewebsites.net/v1/api/users/posts', user)
                    .then((res) => {
                        window.localStorage.setItem('posts', JSON.stringify(res.data));
                        setPosts(JSON.parse(window.localStorage.getItem('posts')));
                        console.log(res.data)
                    })
                    .catch(err => console.log(err));
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    const change = (event) => {
        console.log(event);
        setUser({ [event.target.name]: event.target.value });
        console.log(user);
    }

    const submit = (event) => {
        let post = JSON.parse(window.localStorage.getItem('post'));
        console.log('https://fedback.azurewebsites.net/v1/api/posts/' + post.id + '/responds', response);
        axios.post('https://fedback.azurewebsites.net/v1/api/posts/' + post.id + '/responds', response).then((res) => {
            setResponse(res.data);
            console.log(res.data);
        })
    }

    const Posts = allPosts && Object.values(allPosts).map((post) => {
        const { title, available } = post;
        if (available) {
            return (
                <li class="list-group-item text-right">
                    <span class="pull-left">
                        <strong>{title}</strong>
                    </span>
                    <br />
                    <a type="button" class="btn btn-primary" href="/editPost" onClick={() => { savePost(post) }} >Modifier</a>
                    <a type="button" class="btn btn-danger" href="#/account" onClick={() => { deletePost(post) }} >supprimer</a>
                </li>
            )
        } else {
            return (
                <></>
            )
        }
    }
    )

    return (
        <>
            <div class="container bootstrap snippet">

                <div class="row">
                    <div class="col-sm-3">{/* <!--left col--> */}


                        <div class="panel panel-default">
                            <div class="panel-heading"><h2>Mes posts</h2><i class="fa fa-link fa-1x"></i></div>
                        </div>


                        <ul class="list-group">
                            <li class="list-group-item text-muted">Posts <i class="fa fa-dashboard fa-1x"></i></li>
                            {Posts}
                        </ul>

                    </div>{/* <!--/col-3--> */}
                    <div class="col-sm-9">
                        <div class="tab-content">
                            <div class="tab-pane active" id="home">
                                <hr />
                                <form class="form" on
                                    mit={submit} onChange={change}>
                                    <div class="form-group">

                                        <div class="col-xs-6">
                                            <label for="first_name"><h4>First name</h4></label>
                                            <input type="text" class="form-control" name="user.firstname" id="first_name" placeholder="first name" defaultValue={user.firstname} title="enter your first name if any." />
                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <div class="col-xs-6">
                                            <label for="last_name"><h4>Last name</h4></label>
                                            <input type="text" class="form-control" name="user.lastname" id="last_name" placeholder="last name" defaultValue={user.lastname} title="enter your last name if any." />
                                        </div>
                                    </div>

                                    <div class="form-group">

                                        <div class="col-xs-6">
                                            <label for="phone"><h4>Phone</h4></label>
                                            <input type="text" class="form-control" name="user.phoneNumber" id="phone" defaultValue={user.phoneNumber} placeholder="enter phone" title="enter your phone number if any." />
                                        </div>
                                    </div>

                                    <div class="form-group">

                                        <div class="col-xs-6">
                                            <label for="email"><h4>Email</h4></label>
                                            <input type="email" class="form-control" name="user.email" id="email" placeholder="you@email.com" defaultValue={user.email} title="enter your email." />
                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <div class="col-xs-6">
                                            <label for="password"><h4>Password</h4></label>
                                            <input type="password" class="form-control" name="user.password" id="password" placeholder="password" defaultValue={user.password} title="enter your password." />
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

export default Account;
