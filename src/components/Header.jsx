import React from 'react';

const Header = () =>{
    let button;
    if(localStorage.token) button =  <a href="/createdPost" className="appointment-btn scrollto"><span className="d-none d-md-inline">Créer </span> un nouveau poste</a>;
    else button = <div><a href="/login" className="appointment-btn scrollto"><span className="d-none d-md-inline"> se connecter</span></a> <a href="/register" className="appointment-btn scrollto"><span className="d-none d-md-inline"> Créer un compte</span></a></div> ;
    return(
               // <!-- ======= Header =======--> */}
               <header id="header" className="fixed-top">
               <div className="container d-flex align-items-center">
                   <h1 className="logo me-auto"><a href="/">Donation social media platform</a></h1>
                   <nav id="navbar" className="navbar order-last order-lg-0">
                       <ul>
                           <li><a className="nav-link scrollto" href="/">Home</a></li>
                           <li><a className="nav-link scrollto" href="/about">About</a></li>
                           <li><a className="nav-link scrollto" href="/categories">Catégories</a></li>
                           <li><a className="nav-link scrollto" href="/account">Mon compte</a></li>
                           <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
                       </ul>
                       <i className="bi bi-list mobile-nav-toggle"></i>
                   </nav>
                   {/* <!-- .navbar--> */}
                   {button}

               </div>
           </header>
           );
}

export default Header ;