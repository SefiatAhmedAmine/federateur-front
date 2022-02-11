import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './css/Login.css'
import lgnimg from './img/hero-bg.jpg'
import {useState} from 'react'
import axios from 'axios';
import regimg from './img/registration.svg'
import LoginModal from './modal';


const RegistrationForm = () => {
    const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordPlaceHolder, setPasswordPlaceHolder] = useState("");
  const [emailPlaceHolder, setEmailPlaceHolder] = useState("");
  const [fnPlaceHolder, setfnPlaceHolder] = useState("");
  const [lnPlaceHolder, setlnPlaceHolder] = useState("");
  const [phonePlaceHolder, setphonePlaceHolder] = useState("");
  const [modalShow, setModalShow] = useState(false);
  

    let handleSubmit = async (e) => {
        e.preventDefault();
        var data = JSON.stringify({
            "firstname": firstName,
            "lastname": lastName,
            "phoneNumber": phoneNumber,
            "email": email,
            "password": password
          });
          
          var config = {
            method: 'post',
            url: 'https://fedback.azurewebsites.net/v1/api/users/save',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setModalShow(true);
          })
          .catch(function (error) {
            console.log(error);
          });
          
          
      };
    return (
        <>
            <img className="wave" src={lgnimg}></img>
                <div className="container2">
                    <div className="img">
                        <img src={regimg} />
                    </div>
                    <div className="login-content">
                        <form onSubmit={handleSubmit}>
                            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" />
                            <h2 className="title">Welcome</h2>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5>{fnPlaceHolder.length==0?"First Name":fnPlaceHolder}</h5>
                                    <input type="text" className="input" onChange={e=>{setFirstName(e.target.value);if(e.target.value.trim().length<=0) setfnPlaceHolder("First Name");else setfnPlaceHolder(" ")}}  />
                                </div>
                            </div>
                            
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5>{lnPlaceHolder.length==0?"Last Name":lnPlaceHolder}</h5>
                                    <input type="text" className="input" onChange={e=>{setLastName(e.target.value);if(e.target.value.trim().length<=0) setlnPlaceHolder("Last Name");else setlnPlaceHolder(" ")}}  />
                                </div>
                            </div>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5>{emailPlaceHolder.length==0?"Email":emailPlaceHolder}</h5>
                                    <input type="email" className="input" onChange={e=>{setEmail(e.target.value);if(e.target.value.trim().length<=0) setEmailPlaceHolder("Email");else setEmailPlaceHolder(" ")}} />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5>{phonePlaceHolder.length==0?"Phone Number":phonePlaceHolder}</h5>
                                    <input type="text" className="input" onChange={e=>{setPhoneNumber(e.target.value);if(e.target.value.trim().length<=0) setphonePlaceHolder("Phone Number");else setphonePlaceHolder(" ")}}  />
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
                            <a href="#">Already registered?</a>
                            <input type="submit" className="btn" value="Register" />
                        </form>
                    </div>
                </div>

                <LoginModal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    );

}

export default RegistrationForm;