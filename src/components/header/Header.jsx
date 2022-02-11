import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // <!-- ======= Header =======--> */}
        <header id="header" >
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a href="/">Medilab</a></h1>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        {/* <li><a className="nav-link scrollto active" href="/">Home</a></li>
                        <li><a className="nav-link scrollto" href="/about">About</a></li> */}
                        <li><Link to="/categories">Catégories</Link></li>
                        {/* <li><a className="nav-link scrollto" href="/account">Mon compte</a></li>
                        <li><a className="nav-link scrollto" href="/">Doctors</a></li>
                        <li><a className="nav-link scrollto" href="/contact">Contact</a></li> */}
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* <!-- .navbar--> */}

                <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>

            </div>
        </header>
    );
}

export default Header;