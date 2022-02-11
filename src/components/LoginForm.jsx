import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './css/Login.css'
import lgnimg from './img/hero-bg.jpg'
import {useState} from 'react'
import axios from 'axios';

const LoginForm = () => {
    const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordPlaceHolder, setPasswordPlaceHolder] = useState("");
  const [emailPlaceHolder, setEmailPlaceHolder] = useState("");

    let handleSubmit = async (e) => {
        console.log(email);
        console.log(password);
        e.preventDefault();
        var data = JSON.stringify({
            email: email,
            password: password
          });
          
          var config = {
            method: 'post',
            url: 'https://fedback.azurewebsites.net/v1/api/profile/login',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            data = response.data;
            localStorage.setItem('user',JSON.stringify(data));
            localStorage.setItem('token',data.token);

          })
          .catch(function (error) {
            console.log(error);
          });
          
      };
    return (
        <>
            <img className="wave" src={lgnimg}></img>
                <div className="container">
                    <div className="img">
                        <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg" />
                    </div>
                    <div className="login-content">
                        <form onSubmit={handleSubmit}>
                            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" />
                            <h2 className="title">Welcome</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5>{emailPlaceHolder.length==0?"Email":emailPlaceHolder}</h5>
                                    <input type="text" className="input" onChange={e=>{setEmail(e.target.value);if(e.target.value.trim().length<=0) setEmailPlaceHolder("Email");else setEmailPlaceHolder(" ")}} />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5>{passwordPlaceHolder.length==0?"Password":passwordPlaceHolder}</h5>
                                    <input type="password" className="input" onChange={e=>{setPassword(e.target.value);if(e.target.value.trim().length<=0) setPasswordPlaceHolder("Password");else setPasswordPlaceHolder(" ")}}  />
                                </div>
                            </div>
                            <a href="#">Forgot Password?</a>
                            <input type="submit" className="btn" value="Login" />
                        </form>
                    </div>
                </div>

            
        </>
    );

}

export default LoginForm;