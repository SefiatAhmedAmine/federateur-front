import axios from "axios";
import { Component } from "react";
import { Link } from 'react-router-dom'


export default class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
        this.state.post = JSON.parse(window.localStorage.getItem('post'));
    }

    changeTitle = (event) => {
        //console.log(event.target.name)
        let p = this.state.post;
        p.title = event.target.value;
        this.setState({ post: p })
        console.log("---",this.state.post)
    }

    changeDescription = (event) => {
        //console.log(event.target.name)
        let d = this.state.post;
        d.description = event.target.value;
        this.setState({ post: d })
        console.log("---",this.state.post)
    }

    changeAvailable = (event) => {
        //console.log(event.target.name)
        let a = this.state.post;
        if(event.target.value == "true") {
            a.available = true;
        }
        if(event.target.value == "false") {
            a.available = false;
        }
        this.setState({ post: a })
        console.log("---",this.state.post)
    }

    accepter(respond) {
        //update respond
        respond.verified = true;
        axios.put('https://fedback.azurewebsites.net/v1/api/responds/update', respond).then((res => {
            console.log(res.data);
        }))
        //update post
        let p = this.state.post;
        p.available = false
        this.setState({ post: p });
        axios.put('https://fedback.azurewebsites.net/v1/api/posts/update', this.state.post).then((res => {
            console.log(res.data);
        }))
        let user = JSON.parse(window.localStorage.getItem('user'));
        console.log(user)
        axios.post('https://fedback.azurewebsites.net/v1/api/users/posts', user)
            .then((res) => {
                window.localStorage.setItem('posts', JSON.stringify(res.data));
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    modifier = (poste) => {
        //console.log("-->", poste)
        // axios.put('https://fedback.azurewebsites.net/v1/api/posts/update', poste).then((res => {
        //     console.log(res.data);
        // }))
    }

    render() {
        return (
            <div className="container">
            <div className="row" >
                <div className="col-md-12 border-right">
                    
                    <div className="p-3 py-5">
                        <h2 className="text-center" style={{fontFamily: "fantasy"}}>Mon poste</h2>
                        <div className="row mt-3">
                            <div className="col-md-12" style={{marginBottom: "20px"}}><label className="labels">Titre</label><input type="text" onChange={this.changeTitle} className="form-control" placeholder="enter phone number" defaultValue={this.state.post.title} /></div>
                            <div className="col-md-12" style={{marginBottom: "20px"}}><label className="labels">description</label><textarea type="text" onChange={this.changeDescription} className="form-control" placeholder="enter address" defaultValue={this.state.post.description} ></textarea></div>
                            <div className="col-md-12" style={{marginBottom: "20px"}}><label className="labels">Is available</label>
                                <select className="form-control" onChange={this.changeAvailable}>
                                    <option className="form-control" value="true">True</option>
                                    <option className="form-control" value="false">False</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" onClick={() => {axios.put('https://fedback.azurewebsites.net/v1/api/posts/update', this.state.post).then((res => {console.log(res.data);}))}} type="button">Enregistrer</button></div>
                    </div>
                </div>
                <div className="" >
                    <div className="col-md-12">
                        <div className="p-3 py-5">
                            <div className="experience">
                                <h2 style={{fontFamily: "cursive"}}> § Les réponses</h2>
                                <hr/>
                                <div className="row">
                                    {
                                        this.state.post.responds && Object.values(this.state.post.responds).map((respond, index) => {
                                            const { message } = respond;
                                            console.log(this.state.post)
                                            return (
                                                <div className="card-body" key= {index}>
                                                    <h4 className="">&rarr; Réponse {index+1} :</h4>
                                                    <div className="">
                                                        <div className="panel panel-default" style={{paddingLeft: "5%"}}>
                                                            <div className="panel-heading">
                                                                <strong>@{respond.respondedBy.firstname}{respond.respondedBy.lastname}</strong> <span className="text-muted">commented at 5 days ago</span>
                                                            </div><br/>
                                                            <div className="panel-body">{message}
                                                            </div>
                                                        </div><br/>
                                                        <div className="d-grid gap-2 col-2 mr-auto"><Link role='button' to='/categories' type="button" className="btn btn-success btn-sm" onClick={() => { this.accepter(respond) }}>Accepter</Link></div>
                                                    </div>
                                                    <hr />
                                                </div>
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
        )
    }
}