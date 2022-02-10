import axios from "axios";
import { Component } from "react";


export default class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
        this.state.post = JSON.parse(window.localStorage.getItem('post'));
    }
    accepter(respond){
        //update respond
        respond.verified = true ;
        axios.put('https://fedback.azurewebsites.net/v1/api/responds/update',respond).then((res =>{
            console.log(res.data);
        }))
        //update post
        this.state.post.available = false ;
        axios.put('https://fedback.azurewebsites.net/v1/api/posts/update',this.state.post).then((res =>{
            console.log(res.data);
        }))
    }
    render() {
        return (
            <div class="row" >
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="row mt-3">
                            <div class="col-md-12"><label class="labels">Titre</label><input type="text" class="form-control" placeholder="enter phone number" value={this.state.post.title} /></div>
                            <div class="col-md-12"><label class="labels">description</label><textarea type="text" class="form-control" placeholder="enter address" value={this.state.post.description} ></textarea></div>
                            <div class="col-md-12"><label class="labels">Is available</label>
                                <select class="form-control">
                                    <option class="form-control" value="true">True</option>
                                    <option class="form-control" value="false">False</option>
                                </select>
                            </div>
                        </div>
                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Enregistrer</button></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center experience">
                            <span>Les reponses</span>
                            <div className="row">
                                {
                                    this.state.post.responds && Object.values(this.state.post.responds).map((respond) => {
                                        const { id, message, createdBy } = respond;
                                        return (
                                            <div class="card-body">
                                                <h2 class="">{message}</h2>
                                                <div class=""><a class="btn btn-primary btn-sm" onClick={() => { this.accepter(respond)}}>Accepter</a></div>
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
        )
    }
}