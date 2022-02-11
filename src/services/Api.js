import {HOST} from '../contexts/data';
import axios from 'axios';

export function getCategory() {
    return axios
        .get(HOST + 'v1/api/categories/')
        .then( res => res.data)
}

export function createPost(formulaire) {
    return axios
        .post(HOST + 'v1/api/posts/save', formulaire)
        .then(res => res.data)
}