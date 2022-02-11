import React from 'react'
import './header.css';
import {Link } from 'react-router-dom';


export default function AdminHeader() {
    return (
        <header id="header">
        <div className="container d-flex align-items-center">
            <h1 className="logo me-auto"><a href="/">Medilab</a></h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>

                    <li><a className="nav-link scrollto" href="/admin">Acceuil</a></li>
                    {/* <li><Link to="/admin/posts">Postes</Link></li> */}
                    <li><Link to="/admin/categories">Catégories</Link></li>
                    <li><Link to="/admin/accounts">Utilisateurs</Link></li>
                    <li><a className="nav-link scrollto" href="/">Deconnexoin</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
            {/* <!-- .navbar--> */}

            {/* <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a> */}

        </div>
    </header>
    )
}
